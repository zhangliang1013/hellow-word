// 获得当前时间
function patchZero(v){
    return v < 10 ? '0' + v : v;
}
function formatDate(){
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth();
    var d = now.getDate();
    var h = now.getHours();
    var mm = now.getMinutes();
    var s = now.getSeconds();
    return y + '-' + patchZero(m) + '-' + patchZero(d) + ' ' + patchZero(h) + ":" + patchZero(mm) + ':' + patchZero(s);
}
let time = formatDate();

// 获取元素
let text = document.querySelector('.weibo-text');
let btn = document.querySelector('.weibo-btn');
let ul = document.querySelector('.weibo-list');

// 将本地储存的数据拿出来
let data = localStorage.getItem('weibo');
let arr;
if(data == null){
    arr = [];
} else {
    arr = JSON.parse(data);
}
arr.forEach(function(e) {
    let li = document.createElement('li');
    let time = formatDate();
    li.innerHTML = '<p class="content">' + e.content + '</p><span data-id="'+e.id +'" class="del">删除</span><em class="time">' + e.time + '</em>';
    let first = ul.children[0];
    ul.insertBefore(li, first);
  });

  // 点击事件增加数据并保存在本地储存
btn.onclick = fn;
function fn(){
    let content = text.value;
    let li = document.createElement('li');
    let first = ul.children[0];
    ul.insertBefore(li,first);
    let id = 0;
    arr.forEach(function(e){
      if(id < e.id){
        id = e.id;
      }
    });
    id++;
    li.innerHTML = '<p class="content">' + content + '</p><span data-id="'+ id +'" class="del">删除</span><em class="time">' + time + '</em>';
    text.value = '';
    // 存数据

    let obj = {
        id: id,
        content: content,
        time: time
    }
    arr.push(obj);
    json = JSON.stringify(arr);
    arr = JSON.parse(data);
    localStorage.setItem('weibo',json);
}

// 点击事件删除数据包括本地储存的该数据
ul.addEventListener('click',function(e){
    if( e.target.nodeName === 'SPAN'){
        ul.removeChild(e.target.parentNode);
        let data = localStorage.getItem('weibo');
        let arr = JSON.parse(data);
        let id = e.target.dataset.id;
        arr.forEach( function(e,i){
            if( id == e.id){
                arr.splice(i,1)
            }
        })
        let json = JSON.stringify(arr);
        localStorage.setItem('weibo',json)
    }
})

// 注意：删除本地储存数据，设置id，一对一删除
// 每行数据存在一个对象里面，所有对象存在数组里面