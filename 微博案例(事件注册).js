let btn = document.querySelector('.weibo-btn');
let text = document.querySelector('.weibo-text');
let ul = document.querySelector('.weibo-list');

// btn.addEventListener('click',function(){
//     let cetent = text.value;
//     let li = document.createElement('li');
//     li.innerHTML = ' <p>'+ cetent +'</p> <span>删除</span>';
//     let first = document.querySelector('li:nth-child(1)');
//     ul.insertBefore(li,first);
//     text.value = '';
//     fn();
// });
btn.onclick = fm;
 function fm(){
    let centont = text.value;
    let li = document.createElement('li');
    li.innerHTML = ' <p>'+ centont +'</p> <span>删除</span>';
    let first = document.querySelector('li:nth-child(1)');
    ul.insertBefore(li,first);
    text.value = ' ';
    fn();
}

function fn(){
    let span = document.querySelectorAll('li span');
    for(let i = 0; i < span.length; i++){
       span[i].onclick = function(){
        let lis = document.querySelectorAll('li');
           ul.removeChild(lis[i]);
       }
    }
}
fn();


// text.onkeydown = function(e){
//     /* 判断是否按下了 ctrl + 回车 */
//     if(e.keyCode === 13 && e.ctrlKey){
//         // 实现发布效果
//         fm();
//     }
// }


text.addEventListener('keydown',function(e){
    if(e.ctrlKey && e.keyCode === 13){
    fm();
  }
})