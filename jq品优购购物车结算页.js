$(function(){
    // 本地存储拿元素
  let json =  localStorage.getItem('jian');
  let arr = JSON.parse(json);
// 动态生成元素
let html = '';
  arr.forEach(function(e){
      html += `<div class="item" data-id="${e.pID}">
      <div class="row">
        <div class="cell col-1 row">
          <div class="cell col-1">
            <input type="checkbox" class="item-ck" ${e.isChecked ? "checked" : ''} >
          </div>
          <div class="cell col-4">
            <img src="${e.imgSrc}" alt="">
          </div>
        </div>
        <div class="cell col-4 row">
          <div class="item-name">${e.name}</div>
        </div>
        <div class="cell col-1 tc lh70">
          <span>￥</span>
          <em class="price">${e.price}</em>
        </div>
        <div class="cell col-1 tc lh70">
          <div class="item-count">
            <a href="javascript:void(0);" class="reduce fl ">-</a>
            <input autocomplete="off" type="text" class="number fl" value="${e.number}">
            <a href="javascript:void(0);" class="add fl">+</a>
          </div>
        </div>
        <div class="cell col-1 tc lh70">
          <span>￥</span>
          <em class="computed">${e.price * e.number}</em>
        </div>
        <div class="cell col-1">
          <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
        </div>
      </div>
    </div>`
  })  
  $('.item-list').append(html);

if( arr.length !== 0){
    $('.empty-tip').hide();
    $('.cart-header').show();
    $('.total-of').show();
}
// 全选与点选
let noCleck = arr.find(e =>{
     return !e.isChecked;
})
$('.pick-all').prop('checked',!noCleck);

// 点击全选 下面都选
$('.pick-all').on('click',function(){
  let star = $(this).prop('checked');
  $('.item-ck').prop('checked',star);
  $('.pick-all').prop('checked',star);

  arr.forEach(function(e){
    e.isChecked = star;
  });
  let json = JSON.stringify(arr);
  localStorage.setItem('jian',json);
  calcTotal();
});

// 点击单选 全选跟选
$('.item-ck').on('click',function(){
  let cell = $('.item-ck').length === $('.item-ck:checked').length;
  $('.pick-all').prop('checked',cell);
  let pID = $(this).parents('.item').attr('data-id');
  let isChecked = $(this).prop('checked');
  arr.forEach(function(e){
      if(e.pID == pID){
        e.isChecked = isChecked;
      }
  })
  josn = JSON.stringify(arr);
  localStorage.setItem('jian',josn);
  calcTotal();
})



// 结算总价和总数量
function calcTotal() {
    let totalCount = 0; 
    let totalMoney = 0; 
    arr.forEach(e => {
      if (e.isChecked) {
        totalCount += parseInt(e.number);
        totalMoney += parseInt(e.number) * e.price;
      }
    })
    $('.selected').text(totalCount);
    $('.total-money').text(totalMoney);
  }
  calcTotal();




//   加号添加数量
$('.item-list').on('click','.add',function(){
    let prev = $(this).prev();
    let count = prev.val();
    prev.val(++count);
    let id = $(this).parents('.item').attr('data-id');
    let obj = arr.find(function(e){
      return  e.pID == id;
    })
    obj.number = count;
  json = JSON.stringify(arr);
  localStorage.setItem('jian',json);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    calcTotal();
    $(this).parents('.item').find('.computed').text(obj.number * obj.price);
})






// 减法
$('.item-list').on('click','.reduce',function(){
    let next = $(this).next();
    let count = next.val();
    if(count <= 1){
        alert('请输入正确的数字')
        return;
    }
    next.val(--count);
    let id = $(this).parents('.item').attr('data-id');
    let obj = arr.find(e =>{
      return  e.pID == id;
    })
    obj.number = count;
    json = JSON.stringify(arr);
    localStorage.setItem('jian',json);
    calcTotal();
    $(this).parents('.item').find('.computed').text(obj.number * obj.price);
})


// 输入中间字
$('.item-list').on('focus','.number',function(){
    let old = $(this).val();
    $(this).attr('data-old',old);
  });
$('.item-list').on('blur','.number',function(){
    let current = $(this).val();
    if (current.trim().length === 0 || isNaN(current) || parseInt(current) <= 0) {
      let old = $(this).attr('data-old');
      $(this).val(old); 
      alert('商品数量不正确，请输入一个阿拉伯数字');
      return;
    }
    
    let id = $(this).parents('.item').attr('data-id');
    let obj = arr.find(e=>{
      return e.pID == id;
    });
    obj.number = parseInt(current);
    json = JSON.stringify(arr);
    localStorage.setItem('jian',json);
    calcTotal();
    $(this).parents('.item').find('.computed').text(obj.number * obj.price);
  })



// 实现删除
$('.item-list').on('click','.item-del',function(){
    layer.confirm('你确定要删除吗?', {icon: 0, title:'警告'}, (index)=>{
      layer.close(index);
      let id = $(this).parents('.item').attr('data-id');
      $(this).parents('.item').remove();
      arr = arr.filter(e=>{
        return e.pID != id;
      });
      json = JSON.stringify(arr);
      localStorage.setItem('jian',json)
      calcTotal();
    });
  })
})