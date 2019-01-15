
function updatePword() {
	//设置昵称的正则表达式
	var pwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,20}$/;
	var user = JSON.parse(localStorage.getItem('tuser'));
	mui.toast(user.pword);
	var oldpword = mui("#oldpass")[0].value;
	var pword = mui("#newpass")[0].value;
	var repword = mui("#repass")[0].value;
	var id = user.id;
	if(id != null && "" != id) {
		if(user.pword == oldpword) {
			if(pwReg.test(pword)) {
				if(pword == repword) {
					mui.ajax({
						url: 'http://172.19.129.6:86/touser/updateUser',
						type: 'post',
						dataType: 'json',
						data: {
							id: id,
							pword: pword
						},
						success: function(data) {
							if(data.ms.status == true) {
								mui.openWindow({
									url: '../sets.html',
									id: '../sets.html'
								});
							} else {
								alert(data.ms.msg);
							}
						}
					})
				} else {
					mui.alert("两次密码不一致");
				}
			} else {
				mui.alert("输入密码不符合规则");
			}
		} else {
			mui.alert("原密码错误");
		}
	} else {
		mui.alert("密码的时候获取用户失败")
	}

}