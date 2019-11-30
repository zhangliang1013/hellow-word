

// 注册键盘弹起事件
pwd.onkeyup = fn;
 function fn(lv){
    //  获取密码框的内容
    let password = this.value;
    //  条件1 长度不够6 强度0
    if(password.length <= 6){
        return;
    };
    let lv = 0;
    // 条件二 有数字 强度加一格
    if(/\d/.test(password)){
        lv++;
    }
    // 条件三 有小写字母 强度加一
    if(/[a-z]/.test(password)){
        lv++;
    };
    // 条件四 有大写字母 强度加一
    if(/[A-Z]/.test(password)){
        lv++;
    };
    // 条件五 有特殊符号 强度加一
    if(/[*_.-]/.test(password)){
        lv++;
    } ;
// 使用方法
   inner.style.width = 25 * lv + '%';
}


