/* "abcoefoxyozzopp" 查找字符串中所有o出现的位置 */
function fn(){
    var s = 'abcoefoxyozzopp';
var array = [];
do {
  var index = s.indexOf('o', index + 1);
  if (index != -1) {
    array.push(index);
  }
} while (index > -1);
}
console.log(array);