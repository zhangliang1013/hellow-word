function fn(){
    var num1 =parseFloat(prompt('请输入第一个数字'));
var num2 =parseFloat(prompt('请输入第二个数字'));
var num3 =parseFloat(prompt('请输入第三个数字'));

if(isNaN(num1) || isNaN(num2) || isNaN(num3) ){
    alert('输入不是数字，无法进行比较');
}else if(num1>num2 && num1>num3) {
  alert('第一个数最大，是'+num1);
}else if(num2>num1 && num2>num3) {
  alert('第二个数最大，是'+num2);
}else if(num3>num2 && num3>num1) {
  alert('第三个数最大，是'+num3);
}else if(num1==num2 && num2==num3){
   alert('三个数大小相等，是'+num1);
}else if( num1==num2 && num1>num3){
  alert('第一个数和第二个数相等，并且大于第三个数，是'+num1);
}else if(num1==num3 && num1>num2){
  alert('第一个数和第三个数相等，且大于第二个数，是'+num1);
}else if( num2==num3 && num2>num1){
  alert('第二个数和第三个数相等，且大于第一个数，是'+num2);
}
}