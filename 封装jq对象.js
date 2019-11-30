;(function(){
    // 1,封装获取元素
    function jQuery(selector){
    return new Init(selector);
    }
    function Init(selector){
        let emli = document.querySelectorAll(selector);
      for(var i = 0; i < emli.length; i++){
          this[i] = emli[i]
      }
      this.length = emli.length;
    };
    // 2，封装on的注册方式
     
    Init.prototype.on = function(tyle, callback){
    this.each(function(i,e){
        e.addEventListener(type, callback);
    });
    // 实现链式编程
    return this;
    }
    // 3，封装样式修改的函数
    Init.prototype.css = function(key,value){
      if(value == undefined){
        // window.getComputedStyle获取所有样式
        let cssResult = window.getComputedStyle(this[0]);
        return cssResult[key];
      }else{
          this.each(function(i,e){
            e.style[key] = value;
          })
      }
      return this;
    }
    
    // 4，封装each循环                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    Init.prototype.each = function (callback) {
        for (let i = 0; i < this.length; i++) {
          callback(i, this[i]);
        }
        return this;
      }
    
      // 封装好了代码之后，需要把代码开放给外面使用
      window.$ = window.jQuery = jQuery;
    
    
    })();