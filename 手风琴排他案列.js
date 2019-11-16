let lis = document.querySelectorAll('#box li');

arr = ['./教师代码/images/1.jpg','./教师代码/images/2.jpg','./教师代码/images/3.jpg','./教师代码/images/4.jpg','./教师代码/images/5.jpg',];
arr.forEach(function(e,i){
    lis[i].innerHTML = `<a href="#">
       <img src="${e}" alt="">
   </a>`
});


lis.forEach(function(e,i){
    e.onmouseover = function(){
        lis.forEach(function(e){
            e.style.width = 100 + 'px';
        })
        this.style.width = 800 + 'px';
    }

    e.onmouseout = function(){
        lis.forEach(function(e){
            e.style.width = 240 + 'px';
        })
    }
})