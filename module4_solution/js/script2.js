(function(window) {
    var ivaGreeter = {}
    ivaGreeter.name = "Iva";
    var greeting = "Hi ";
    ivaGreeter.sayHi = function() {
        console.log(greeting + ivaGreeter.name);
    }

    window.ivaGreeter = ivaGreeter;
})(window);


