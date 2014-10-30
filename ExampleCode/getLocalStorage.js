//To equalize for browsers that 
//support only globalStorage
function getLocalStorage(){
    if (typeof localStorage == "object"){
        return localStorage;
    } else if (typeof globalStorage == "object"){
        return globalStorage[location.host];
    } else {
        throw new Error("Local storage not available.");
    }
}

var storage = getLocalStorage();


EventUtil.addHandler(document, "storage", function(event){
    alert("Storage changed for " + event.domain);
});