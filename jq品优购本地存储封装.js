// 封装获取本地存储的数据，默认是返回数组的
kits.loadData = function (key) {
    let json = localStorage.getItem(key);
    // console.log(json);
    // let arr;
    // if (json === null) {
    //   arr = [];
    // } else {
    //   arr = JSON.parse(json);
    // }
  
    // 简化 - 三元表达式
    // arr = json === null ? [] : JSON.parse(json);
    // return arr;
  
    // 使用短路运算进行简化
    // console.log(JSON.parse(json)); 如果json变量是null，转换之后还是null
    return JSON.parse(json) || [];
  }
  
  
  // 封装把数据存储到本地数据里面的方法
  /**
   * @description 把复杂数据转换为json格式存储到本地数据里面的封装
   * @param { string } key
   * @param { Array || Object } data
   * @returns undefined
   */
  kits.saveData = function (key,data){
    let json = JSON.stringify(data);
    localStorage.setItem(key,json);
  }