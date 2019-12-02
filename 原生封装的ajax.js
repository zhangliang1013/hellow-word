/**
 * 封装好的ajax请求的函数
 * @param { object } obj
 * @example {
 *  url : 请求的地址,
 *  type : 请求的方式,
 *  data : 请求携带的数据，是一个对象
 *  callback : 请求成功的回调函数
 * }
 */
// 分装ajax函数
function ajax(obj){
    // 参数
    obj = obj || {};
    obj.type = obj.type || 'get';
    obj.url = obj.url || '';
    obj.data = obj.data || {};
    // 传进来的数据data 对象格式转为url编码格式
    let arr = [];
    for(let key in obj.data){
        arr.push(key + '=' + obj.data[key]);
    };
    obj.data = arr.join('&');
    // 第一步 创建异步对象 
    let xhr = new XMLHttpRequest();
    // 第二步 设置发送类型和发送地址
    if(obj.type.toLowerCase() === 'get'){
        obj.url = obj.url + '?' + obj.data;
    }
    xhr.open(obj.type,obj.url);
    // 第三步 发送请求
    if(obj.type.toLowerCase() === 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(obj.data);
    }else{
        xhr.send();
    };
    // 第四步 监听状态变化
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let response = xhr.responseType;
            if(xhr.getResponseHeader('Content-Type').indexOf('json')  !== -1){
                response = JSON.parse(xhr.responseText);
               obj.callback && obj.callback(response);
            }
        }
    }
    };