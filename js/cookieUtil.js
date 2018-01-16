// cookie的封装
// 设置（包含添加和修改）cookie
function setCookie(name, value, day, path, domain) {
	var sCookie = name + '=' + encodeURIComponent(value);

	// 设置过期时间
	if(day) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + day);
		sCookie = sCookie + ';expires=' + oDate;
	}

	// 设置路径
	if(path) {
		sCookie = sCookie + ';path=' + path;
	}

	// 设置域名
	if(domain) {
		sCookie = sCookie + ';domain=' + domain;
	}

	document.cookie = sCookie;
}

// 删除cookie
function removeCookie(name, path) {
	document.cookie = name + '=;expires=-1;path=' + path;
}


// 查询cookie
function getCookie(name) {
	var sCookie = document.cookie;
	var aCookie = sCookie.split('; ');


	for(var i = 0; i < aCookie.length; i++) {
		var aTemp = aCookie[i].split('=');

		if(aTemp[0] === name) {
			return decodeURIComponent(aTemp[1]);
		}
	}
	return '';
}