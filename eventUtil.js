//Cross-Browser Event Handlers
//跨浏览器 Event Handlers
var EventUtil = {
    // 视情况分别使用DOM0级方法，DOM2级方法或IE方法来添加事件。        
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    getEvent: function(event){
        return event ? event : window.event;
    },    
    getTarget: function(event){
        return event.target || event.srcElement;
            
    },    
    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 默认都是采用DOM0级方法        
    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    stopPropagation: function(event){
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }            
};

var btn = document.getElementById("myBtn");
var handler = function(){
    console.log(event);
};
// test
EventUtil.addHandler(btn, "click", handler);