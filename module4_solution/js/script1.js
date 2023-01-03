(function (window) {
    var idaGreeter = {};
    idaGreeter.name = "Ida";
    var greeting = "Hello ";
    idaGreeter.sayHello = function (){
        console.log(greeting + idaGreeter.name);
}
window.idaGreeter = idaGreeter;
}) (window);