  // 自调用函数
  (function(){
    let small = document.querySelector('.small');
  let big = document.querySelector('.big');
  let mask = document.querySelector('.mask');
  let box = document.querySelector('.box');
  
  // 第一效果(鼠标移入小图，遮罩和大图限时，移出隐藏)
  small.onmouseover = function(){
      big.style.display = 'block';
      mask.style.display = 'block';
  }
  small.onmouseout = function(){
      big.style.display = 'none';
      mask.style.display = 'none';
  }
  
  // 第二效果(遮罩跟着鼠标移动而移动)
  small.onmousemove = function(e){
      let x = e.pageX - mask.offsetWidth/2 - box.offsetLeft;
      let y = e.pageY - mask.offsetHeight/2 - box.offsetTop;
  
      x = x <= 0 ? 0 : x;
      y = y <= 0 ? 0 : y;
     let mx = small.offsetWidth - mask.offsetWidth;
     let my = small.offsetHeight - mask.offsetHeight;
      x = x >= mx ? mx : x;
      y = y >= my ? my : y;
      mask.style.top = y + 'px';
      mask.style.left = x + 'px';
  
  
      // 第三效果(大图跟着鼠标移动而移动)
  let bigImg = document.querySelector('.big > img');
  let bigX = bigImg.offsetWidth - big.offsetWidth;
  let bigY = bigImg.offsetHeight - big.offsetHeight;
  
  let bmX = bigX * x / mx;
  let bmY = bigY * y / my; 
  bigImg.style.top = -bmY + 'px';
  bigImg.style.left =  -bmX + 'px';
  }
  })()
  