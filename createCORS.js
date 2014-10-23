// Cross-Browser CORS
function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var request = createCORSRequest("get", 
    "http://www.somewhere-else-ashu.com/page/");
if (request){
    request.onload = function(){
        //do something with request.responseText
    };
    request.send();
}


            var img = new Image();
            img.onload = img.onerror = function(){
                console.log("Done!");
            };
            img.src = "http://www.baidu.com";

//JSONP通过动态<script>元素来使用。为src属性指定一个跨域URL
//JSONP从其他域中加载代码执行
// callback({ “name”: “Nicholas” });
function handleResponse(response){
    console.log("You’re at IP address " + response.ip + ", which is in " + 
          response.city + ", " + response.region_name);
}
var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);