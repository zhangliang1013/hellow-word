  // 一，随机整数
// 1 获取 0到n的随机整数
function sum(n){
    let r = Math.floor(Math.random() * (n + 1))
    return r;
   }
   console.log(sum(10));
   
   // 2 获取 n 到 m的随机整数
   function smm(n,m){
       let l = Math.floor(Math.random() * (m - n +1) + n)
       return l;
   }
   console.log(smm(30,50));
   
   // 16进制法随机变化颜色(第一种方法)
   // 函数方法
   var arr = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9'];
   function list(n){
       return arr[Math.floor(Math.random() * arr.length)];
   }
   var m = list(m);
   var l = list(l);
   var q = list(q);
   var p = list(p);
   var o = list(o);
   var e = list(e);
   var color = '#' + m + l + q + p + o + e;
   console.log(color);
   document.body.style.backgroundColor = color;
   // 16进制法随机变化颜色(第二种方法)
   // 循环方式
   function fangfa(){
   var arrs = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
   var color = ['#'];
   for(var i = 0; i < 6; i++){
       var r = arrs[Math.floor(Math.random() * arrs.length)];
       color.push(r);
   }
   return color.join('');
   }
   console.log(fangfa());
   
   
   // rgb模式颜色随机变化
   function fn(n){
        m = Math.floor(Math.random() * (n + 1))
        return m;
       }
   var r = fn(255);
   var g = fn(255);
   var b = fn(255);
   var color= 'rgb(' + r + ',' + g + ',' + b + ')';
   console.log(color);