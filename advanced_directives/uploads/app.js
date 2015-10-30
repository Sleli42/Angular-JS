var	app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
	$scope.Boolean = true;
	$scope.FctReturnBoolean = function() {
		return true;
	};
	$scope.FctReturnSomething = function() {
		return 'Hello';
	};
	$scope.Integer = 3;
})


app.controller('RepeatCtrl', function($scope) {
	$scope.friendlist = [
		{'status': 'online', 'name': 'Lucas'},
		{'status': 'offline', 'name': 'Florian'},
		{'status': 'online', 'name': 'Babou'},
		{'status': 'offline', 'name': 'Romain'},
		{'status': 'offline', 'name': 'Malguy'},
		{'status': 'online', 'name': 'Yas'}
	];
});