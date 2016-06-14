/**
 *用法：
 * include.js([[url,callback], ...]);  include.js([url, ...]);
 * include.css([url]);
 *
 * 　　　┏┓　　　┏┓
 * 　　┏┛┻━━━┛┻┓
 * 　　┃　　　　　　　┃
 * 　　┃　　　━　　　┃
 * 　　┃　┳┛　┗┳　┃
 * 　　┃　　　　　　　┃
 * 　　┃　　　┻　　　┃
 * 　　┃　　　　　　　┃
 * 　　┗━┓　　　┏━┛Code is far away from bug with the animal protecting
 * 　　　　┃　　　┃    神兽保佑,代码无bug
 * 　　　　┃　　　┃
 * 　　　　┃　　　┗━━━┓
 * 　　　　┃　　　　　 ┣┓
 * 　　　　┃　　　　 ┏┛
 * 　　　　┗┓┓┏━┳┓┏┛
 * 　　　　　┃┫┫　┃┫┫
 * 　　　　　┗┻┛　┗┻┛
 *
 */
var include = function (window) {

	function loadScript(url, callback) {
		var script = document.createElement("script");
		if("onload" in script) {
			script.async = "async";
			script.src = url;
			script.onload = function () {
				callback();
			};
			script.onerror = function (err) {
				console.warn("load script error", err);
			};
		}else {
			// IE8及之前
			script.onreadystatechange = function () {
				if (/loaded|complete/.test(script.readyState)) {
					resolve(script)
				}
			}
		}
		document.body.appendChild(script);
	};
	
	function loadCss(url) {
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = url;
		document.getElementsByTagName("head")[0].appendChild(link);
	}
	
	// 判断对象类型
	function type(obj) {
		return Object.prototype.toString.call(obj).slice(8, -1);
	};
	
	//解析传进来什么东西
	function jsParser(item) {
		switch (type(item)) {
		case "Array":
			return loadScript(item[0], item[1]);
		case "String":
			return loadScript(item);
		}
	};
	
	return {
		js: function(item) {
			while(item.length) {
				jsParser(item.shift());
			}
		},
		css: function(item) {
			while(item.length) {
				loadCss(item.shift());
			}
		}
	}

}(window);
