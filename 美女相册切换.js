// 利用数组的方式写
var arr = ['./Saved Pictures/01.jpg',
'./Saved Pictures/02.jpg',
'./Saved Pictures/03.jpg',
'./Saved Pictures/04.jpg',
]
var btns = document.getElementsByTagName('input');
var img = document.getElementById('img');
for(i = 0; i < btns.length; i++){
 btns[i].index = i;
 btns[i].onclick = function(){
    img.src = arr[this.index];
}
}

// 利用加的方式写效果
// var btns = document.getElementsByTagName('input');
// var img = document.getElementById('img');
// for(i = 0; i < btns.length; i++){
//     btns[i].index = i;
//     btns[i].onclick = function(){
//    img.src = './Saved Pictures/0'+( this.index+1) +'.jpg';
// }  
// }

// data自定义方式实现
// var btns = document.getElementsByTagName('input');
//  var img = document.getElementById('img');
//  for(let i = 0; i < btns.length; i++){
//      btns[i].onclick = function(){
//          img.src = btns[i].dataset.src;
//      }
//  }