var message = 'hello';

function saySomething(message: string = 'Whats up') {
	console.log(message);
}

saySomething(message);

saySomething(400);

class Greeter {

	saySomething(message: string = 'whats up') {
		return message + ' something';
	}

}

var greeter = new Greeter();
greeter.saySomething('hello');