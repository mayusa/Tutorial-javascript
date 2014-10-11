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
    },
    //A cross-browser method to get the related element
     getRelatedTarget: function(event){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }    
    },
    // detect the DOM version of mouse events that the browsers support
    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        } else {
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4: 
                    return 1;
            }
        }
    },
    // For a cross-browser solution, the first step is to create a method 
    // that can retrieve a normalized value for the mouse wheel delta
    getWheelDelta: function(event){
            if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? 
                -event.wheelDelta : event.wheelDelta);           
                    } else {
            return -event.detail * 40;
        }
    }    

};

var btn = document.getElementById("myBtn");
var handler = function(){
    console.log(event);
};

// test
EventUtil.addHandler(btn, "click", handler);