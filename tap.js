/**
 * 注册轻击操作的函数
 * @param { Element } element 绑定tap事件的元素
 * @param { Function } callback 事件处理程序
 * @param { Number } spanTime 轻击操作的时限
 * @param { Number } distance 轻击操作的距离
 * @returns { undefined }
 */

function tap(element,callback,spanTime ,distance){
     spanTime = spanTime || 250;
     distance = distance||  50;
    let startTime,startX,startY;
// 开始触摸注册事件
element.addEventListener('touchstart',function(e){
   if(e.touches.length !== 1){
       console.log('不是单指点击');
       return;
   }
    startTime = Date.now();
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    // console.log('触摸屏幕了')
});
// 结束触摸注册事件
element.addEventListener('touchend',function(e){
    if (e.changedTouches.length !== 1) {
      console.log('不是单指操作');
      return;
    }
    let endTime = Date.now();
    // console.log('松开屏幕了');
    if (endTime - startTime > spanTime) {
      console.log('按下的时间太长了');
      return;
    }
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    if (Math.abs(endX - startX) > distance || Math.abs(endY - startY) > distance) {
      console.log('滑动的太远了');
      return;
    }
    callback();
   });
}
//以上条件都不满足，则就是轻击注册事件