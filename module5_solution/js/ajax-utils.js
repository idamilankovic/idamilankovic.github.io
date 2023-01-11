(function (global) {
    var ajaxUtils = {};

    function getRequestObject () {
        if (global.XMLHttpRequest) {
            return (new XMLHttpRequest())
        }
        else {
            return(null);
        }
    }

    ajaxUtils.sendGetRequest = function (URL, responseHandler) {
        var request = getRequestObject();
        request.onreadystatechange = function () {
            handleResponse (request, responseHandler);
            
        };
        request.open("GET", URL, true);
        request.send(null);
    };
    
    function handleResponse(request, responseHandler){
        if ((request.readyState ==4) && (request.status == 200)) {
            responseHandler(request);
        };
    };
    global.$ajaxUtils = ajaxUtils;
})(window);