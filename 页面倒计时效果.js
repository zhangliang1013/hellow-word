let btn = document.querySelector('.btn');
btn.onclick = fn;
function fn(){
    let time = 3;
    btn.value = '获取验证码('+ time +')';
    btn.disabbied = true;
    let timeId = setInterval(function(){
        time--;
        btn.value = '获取验证码('+ time +')';
        if(time == 0){
            clearInterval(timeId);
            btn.value = '获取验证码';
            btn.disabbied = false;
        }
    },1000) 
}