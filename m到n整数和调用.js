function getSum(m,n){
    var sum = 0;
    for(i = m;i <= n; i++){
        sum += i;
    }
    return sum;
}
console.log(getSum(10,100));


// 求1到n的整数和
function getSum1(n){
    var sum1 = 0;
    for(i = 1;i <= n;i++){
       sum1 += i;
    }
    return sum1;
}
console.log(getSum1(100));
