$(function(){
    let id = location.search.substring(4);
    let target = phoneData.find(function(e){
        return e.pID == id;
    })
 $('.summary-price em').text(`¥${target.price}`);
 // 改名字
 $('.sku-name').text(target.name);
 // 改图片
 $('.preview-img>img').attr('src',target.imgSrc);



 //  购物车练习开始
$('.addshopcar').on('click',function(){
    let number = $('.choose-number').val();
    if(isNaN(number) || parseInt(number) <1 || number.trim().length === 0){
    alert('请输入正确的数字格式');
    return;
    }
    number = parseInt(number);
     let json = localStorage.getItem('jian');
     arr = json === null ? [] : JSON.parse(json);
     let exist = arr.find(function(e){
       return  e.pID == id;
     })
     if(exist){
        exist.number += number;
     }else{
        //  存进本地存储
         let obj = {
             pID: target.pID,
             imgSrc : target.imgSrc,
             name : target.name,
             price : target.price,
             number : number,
             isChecked : true
         }
         arr.push(obj);
     }
      json = JSON.stringify(arr);
      localStorage.setItem('jian',json);
//  跳转到购物车结算页面
      location.href = './cart.html'
 
})


// 点击数量加
$('.add').on('click',function (){
    let prev = $(this).prev(); 
    let number = prev.val();
     prev.val(++number);
 })
// 点击数量减
$('.reduce').on('click',function(){
    let prev = $(this).prev().prev();
    let number = prev.val();
    if(parseInt(number) <= 1){
        alert('不能输入比1还小的字');
        return 1;
    }
    prev.val(--number);
})
});

