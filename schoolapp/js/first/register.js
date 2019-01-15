
function addKeyEvent(){
	var pwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,20}$/;
	var phReg = /^1(3|4|5|7|8)\d{9}$/;
	var phoneno = mui("#phoneno")[0].value;
	var codes   = mui("#codes")[0].value;
	var pword   = mui("#password")[0].value;
	if(phoneno!=null&&phoneno!=""){
		if(codes!=null&&codes!=""){
		  	if(pword!=null&&pword!=""){
				mui.ajax({
					url  : "http://172.19.129.6:86/touser/registers",
					type : 'post',
					dataType : 'json',
					data : {
								phoneno:mui("#phoneno")[0].value,
								code   :mui("#codes")[0].value,
								pword  :mui("#password")[0].value
						},
						success:function(data){
							if(!data.message.status){
								mui.alert(data.message.msg);
							}else{
								mui.openWindow({
									url : 'login.html',
									id  : 'login.html'
								})
							}
						}
				})
			}else{
				mui.alert("密码不能为空")
			}
		}else{
			mui.alert("请输入验证码")
		}
	}else{
		mui.alert("电话号码为空")
	}
	
}


