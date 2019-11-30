(function(){
    
// 1,用户名框
$('.name').on('blur',function(){
	let userName = $(this).val();
	if(userName.trim().length === 0){
		return;
	};
	// 判断同用户名
	$.ajax({
		url : 'http://127.0.0.1:8080/isUserNameExist',
		type : 'get',
		data : {
			userName : userName,
		},
		success : function(res){
			if(res.code !== 200 ){
				alert('用户名重复，请重新输入');
				return;
			}
		}
	})
});

// 2,验证密码框
$('.pass').on('blur',function(){
	let pass = $(this).val();
	// 位数
	if(pass.trim().length < 6){
		alert('密码长度最低为6位');
		return;
	};
	// 数字
	if(!/\d/.test(pass)){
		alert('至少有一位数字');
		return;
	};
	// 字母
	if(!/[a-zA-Z]/.test(pass)){
		alert('至少有一个字母');
		return;
	};
	// 特殊字符
	if(!/[_*@/-]/.test(pass)){
		alert('至少有一位特殊字符');
		return;
	}
});

// 3,验证密码确认框
$('.repass').on('blur',function(){
	let repass = $(this).val();
	let pass = $('.pass').val();
	if(repass !== pass){
		alert('密码与确认密码不一致，请重新你输入');
		return;
	}
});

// 4,手机号码框
$('.mobile').on('blur',function(){
	let mobile = $(this).val();
	if(!/^[1]\d{10}$/.test(mobile)){
		alert('号码不正确，请重新输入');
		return;
	}
});

// 5,验证码框
$('.verify').on('click',function(){
	$.ajax({
		url : 'http://127.0.0.1:8080/getCodeWithoutPhone',
		type : 'get',
		// data
		success : function(res){
			$('.code').val(res.code);
		}
	})
});

// 当点击立即注册，验证是否有空框
$('.submit ').on('click',function(){
	// 用户名
	let userName = $('.name').val();
	if(userName.trim().length === 0){
		alert('用户名不能为空，请重新输入');
		return;
	};
	// 密码框
	let pass = $('.pass').val();
	if(pass.trim().length === 0){
		alert('密码不能为空，请重新输入');
		return;
	};
	// 确认密码框
	let repass = $('.repass').val();
	if(repass.trim().length === 0){
		alert('确认密码框不能为空,请重新输入');
		return;
	};
	// 手机号码框
	let mobile = $('.mobile').val();
	if(mobile.trim().length === 0){
		alert('手机号码不能为空，请重新输入');
		return;
	};
	// 验证码框
	let code = $('.code').val();
	if(code.trim().length !== 4){
		alert('验证码必须为4位，请重新输入');
		return;
	};


	// 以上条件都满足,则传送到服务器
	$.ajax({
		url : 'http://127.0.0.1:8080/doRegister',
		type : 'post',
		data : {
			userName : userName,
			password : pass,
			phone : mobile
		},
		success : function(res){
			if(res.code === 200){
				alert(res.msg);
			}else{
				alert(res.msg);
			}
		}
	})
});




})()