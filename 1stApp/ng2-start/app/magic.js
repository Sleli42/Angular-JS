var message = 'hello';
function saySomething(message) {
    if (message === void 0) { message = 'Whats up'; }
    console.log(message);
}
saySomething(message);
saySomething(400);
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'whats up'; }
        return message + ' something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello');
//# sourceMappingURL=magic.js.map