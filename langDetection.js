//detect the language of the browser.
(function(){
	var lang = window.navigator.language || window.navigator.browserLanguage;
	if(lang !== "zh-CN"){
		location.href = "index_en.html";
	}
})();