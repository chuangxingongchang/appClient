mui.plusReady(function() {
	document.getElementById("complete").addEventListener('tap', function() {
		newNickname();
	})
})

function newNickname() {
	var user = JSON.parse(localStorage.getItem('tuser'));
	var nickname = mui("#nickname")[0].value;
	var id = user.id;
	if(nickname == null || "" == nickname) {
		nickname = "无";
	}
	mui.ajax({
		url: 'http://172.19.129.6:86/touser/updateUser',
		type: 'post',
		dataType: 'json',
		data: {
			id: id,
			nickname: nickname
		},
		success: function(data) {
			mui.openWindow({
				url: '../sets.html',
				id: '../sets.html'
			});
		}
	})
}