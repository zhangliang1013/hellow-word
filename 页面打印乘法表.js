// 自调用函数
(function(){
    for(j= 1; j<=9; j++){
        for(i=1; i<=j; i++){
            document.write(i+'X' + j + '='+ i*j +'&nbsp;&nbsp;&nbsp;');
        }
        document.write('<br>');
    }
})()

// 函数包装起来直接调用