// 随机图片大小都可用(得照片宽度)
let imgWidth = document.querySelector('.inner').offsetWidth;


    // 第一效果(鼠标悬浮圆点切换轮播图)
let ul = document.querySelector('#imglist');
let list = document.querySelectorAll('.list > i');

list.forEach(function(e,i){
    e.onmouseover = function(){
        let target = imgWidth * i * -1;
        ul.style.left = target + 'px';

     list.forEach(function(event){
         event.classList.remove('current');
     })
     e.classList.add('current');
    }
})
// 第二效果(点击左右框切换轮播图)
let lefts = document.querySelector('.arrow-left');
let rights = document.querySelector('.arrow-right');

let currents = 0;
// 右边
rights.onclick = function(e){
    if(currents === 0){
        currents = 6;
    }
    currents--;
    let temp = imgWidth * currents * -1;
    ul.style.left = temp + 'px';
    

    list.forEach(function(e){
        e.classList.remove('current');
    })
     list[currents].classList.add('current');
}
// 左边
lefts.onclick = function(){
    if(currents === 5){
        currents = -1;
    }
    currents++;
    temp = imgWidth * currents * -1;
    ul.style.left = temp + 'px';

    list.forEach(function(e){
  e.classList.remove('current');
    })
    list[currents].classList.add('current');
}

// 第三阶段(轮播图自动切换)
let timer = setInterval(function(e){
  rights.onclick();
},1500);

// 第四阶段(自动切换开始与继续)
let box = document.querySelector('.box');
box.onmouseover = function(){
    clearInterval(timer);
}
box.onmouseout = function(){
    timer = setInterval(function(){
        rights.onclick();
    },1500)
}