/* eslint-disable */
const api = {
	baseUrl() {
		return "http://192.168.111.222:8080/";
	},
	jqPost(url, data, callback) {
		if (!url.includes("http://")) {
			url = this.baseUrl() + url;
		}
		$.ajax({
			type: "POST",
			url: url,
			async: true,
			data: data,
			success: callback,
			error: (data, textStatus, jqXHR) => {
				console.log(textStatus);
			},
			dataType: "json"
		});
	},
	getUrlParam(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var p = window.location.href.split("?")[1];
		if (p) {
			var r = p.match(reg);
			if (r) {
				return unescape(r[2]);
			}
		}
		return null;
	},
	/**
	 * 获取cookie
	 * @param key  key
	 */
	getCookie(key) {
		var data = document.cookie;
		var startIndex = data.indexOf(key + "=");
		if (startIndex > -1) {
			startIndex = startIndex + key.length + 1;
			var endIndex = data.indexOf(";", startIndex);
			endIndex = endIndex < 0 ? data.length : endIndex;
			var strjson = decodeURIComponent(data.substring(startIndex, endIndex));
			return window.JSON.parse(strjson);
		} else {
			return "";
		}
	},
	/**
	 * 设置cookie
	 * @param key  key
	 * @param value 值
	 * @param time  保存时间（天）
	 */
	setCookie(key, value, time) {
		var time = time;
		var cur = new Date();
		var undefined;
		cur.setTime(cur.getTime() + time * 24 * 3600 * 1000);
		var strvalue = window.JSON.stringify(value);
		document.cookie = key + "=" + encodeURIComponent(strvalue) + ";expires=" + (time === undefined ? "" : cur.toGMTString());
	},
	delCookie(key) {
		var data = this.getCookie(key);
		if (data !== false) {
			this.setCookie(key, data, -1);
		}
	},
	setSessionStorage(key, value) {
		let str = window.JSON.stringify(value);
		if (window.sessionStorage) {
			window.sessionStorage.setItem(key, this.Encrypt(str));
		}
	},
	getSessionStorage(key) {
		var json = "";
		if (window.sessionStorage) {
			json = window.sessionStorage.getItem(key);
			if (json) {
				json = this.Decrypt(json);
				json = window.JSON.parse(json);
			}
		}
		return json;
	},
	setLocalStorage(key, value) {
		let str = window.JSON.stringify(value);
		if (window.localStorage) {
			window.localStorage.setItem(key, this.Encrypt(str));
		}
	},
	getLocalStorage(key) {
		var json = "";
		if (window.localStorage) {
			json = window.localStorage.getItem(key);
			if (json) {
				json = this.Decrypt(json);
				json = window.JSON.parse(json);
			}
		}
		return json;
	},
	checkMobile(nub) {
		if (!/^1[0-9]{10}$/.test(nub)) {
			alert("手机号码输入有误，请检查");
			return false;
		}
	},
	checkCardNo(card) {
		let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
		if (!reg.test(card)) {
			alert("身份证输入有误，请检查");
			return false;
		}
	},
	checkName(name) {
		// let reg = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
		let reg = /^([\u4e00-\u9fa5\·]{1,10})$/;
		if (!reg.test(name)) {
			alert("姓名输入有误，请检查");
			return false;
		}
	},
	/**
	 * 判断Android还是iOS
	 */
	checkDevice() {
		let u = navigator.userAgent;
		let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
		let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		if (isAndroid) {
			return "Android";
		} else if (isiOS) {
			return "iOS";
		} else {
			return "others";
		}
	},
	/**
	 * 获取推广渠道id
	 * @param route 调用页路由
	 */
	getPartnerid(route) {
		let getPartnerid = this.getCookie("partnerid");
		let partnerid = route.query.id;
		if (partnerid) {
			this.setCookie("partnerid", partnerid);
		} else if (getPartnerid) {
			return;
		} else {
			this.setCookie("partnerid", "2001");
		}
	},
	/**
	 * 倒计时
	 * @param  time  倒计时秒数
	 * @param  tickFunc  每秒执行
	 * @param  done     结束后回调
	 */
	countDown(time, tickFunc, done) {
		let tick = () => {
			setTimeout(() => {
				if (time > 0) {
					time--;
					tickFunc(time);
					tick();
				} else {
					done();
					return;
				}
			}, 1000);
		};
		tick();
	},
	/**
	 * 字符串加密
	 * @param  str  加密字符串
	 * @param  pwd  加密密钥
	 * return  加密后字符串
	 */
	Encrypt(str, pwd) {
		if (str === "") return "";
		str = escape(str);
		if (!pwd || pwd === "") {
			var pwd = "6868";
		}
		pwd = escape(pwd);
		var prand = "";
		for (var I = 0; I < pwd.length; I++) {
			prand += pwd.charCodeAt(I).toString();
		}
		var sPos = Math.floor(prand.length / 5);
		var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
		var incr = Math.ceil(pwd.length / 2);
		var modu = Math.pow(2, 31) - 1;
		if (mult < 2) {
			console.log("Algorithm cannot find a suitable hash. Please choose a different password. /nPossible considerations are to choose a more complex or longer password.");
			return null;
		}
		var salt = Math.round(Math.random() * 1000000000) % 100000000;
		prand += salt;
		while (prand.length > 10) {
			prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
		}
		prand = (mult * prand + incr) % modu;
		var enc_chr = "";
		var enc_str = "";
		for (var I = 0; I < str.length; I++) {
			enc_chr = parseInt(str.charCodeAt(I) ^ Math.floor(prand / modu * 255));
			if (enc_chr < 16) {
				enc_str += "0" + enc_chr.toString(16);
			} else enc_str += enc_chr.toString(16);
			prand = (mult * prand + incr) % modu;
		}
		salt = salt.toString(16);
		while (salt.length < 8) salt = "0" + salt;
		enc_str += salt;
		return enc_str;
	},
	/**
	 * 字符串解密
	 * @param  str  解密字符串
	 * @param  pwd  解密密钥
	 * return  解密后字符串
	 */
	Decrypt(str, pwd) {
		if (str === "") return "";
		if (!pwd || pwd === "") {
			var pwd = "6868";
		}
		pwd = escape(pwd);
		if (str === null || str.length < 8) {
			console.log("A salt value could not be extracted from the encrypted message because it's length is too short. The message cannot be decrypted.");
			return;
		}
		var prand = "";
		for (var I = 0; I < pwd.length; I++) {
			prand += pwd.charCodeAt(I).toString();
		}
		var sPos = Math.floor(prand.length / 5);
		var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
		var incr = Math.round(pwd.length / 2);
		var modu = Math.pow(2, 31) - 1;
		var salt = parseInt(str.substring(str.length - 8, str.length), 16);
		str = str.substring(0, str.length - 8);
		prand += salt;
		while (prand.length > 10) {
			prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
		}
		prand = (mult * prand + incr) % modu;
		var enc_chr = "";
		var enc_str = "";
		for (var I = 0; I < str.length; I += 2) {
			enc_chr = parseInt(parseInt(str.substring(I, I + 2), 16) ^ Math.floor(prand / modu * 255));
			enc_str += String.fromCharCode(enc_chr);
			prand = (mult * prand + incr) % modu;
		}
		return unescape(enc_str);
	}
};
export default api;