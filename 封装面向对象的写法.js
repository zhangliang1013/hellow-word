
    /*
  订阅发布模式
    - 把代码解耦
      - 把代码之间的关联性降低
      - 如果某个功能的代码出问题，只需要关注该功能的代码即可，而不会，修改了这个地方的代码，可能会影响别的代码
      - 提高了代码的可维护性
      - 并且封装之后，使用起来会更加简单
*/
// 封装的代码
let  Events = {
    // 订阅发布模式
    add : function(key,fn){
        if(!(this[key] instanceof Array)){
            this[key] = [];
        }
     this[key].push(fn);
    },
    // 发布
    tggle : function(key){
  for(let i = 0; i < this[key].length; i++){
      this[key][i]();
  }
    }
};



// 增加项目调用的代码
// 项目1
Events.add('login',function(){
    console.log('项目一输出500行代码');
});
// 项目二
Events.add('login',function(){
    setInterval(function(){
console.log('项目二输出200行代码');
    },1000)
});
// 项目三
Events.add('login',function(){
    console.log('项目三输出50行代码');
});


// 发布调用

let btn = document.querySelector('.btn');
btn.onclick = function(){
    Events.tggle('login');
}





