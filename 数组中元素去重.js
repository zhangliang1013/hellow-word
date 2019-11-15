function removeRepeat() {
    var o = {};
    // 先统计出第个元素出现的次数
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      if (o[item]) {
        o[item]++;
      }else{
        o[item] = 1;
      }
    }
    // 根据统计的次数，把元素放进一个新数组
    var tmpArray = [];
    for(var key in o) {
      if (o[key] == 1) {
        tmpArray.push(key);
      }else{
        if(tmpArray.indexOf(key) == -1){
          tmpArray.push(key);
        }
      }
    }
    return tmpArray;
  }
  
  var array =  ['c', 'a', 'z', 'a', 'x', 'a'];
  console.log(removeRepeat(array));