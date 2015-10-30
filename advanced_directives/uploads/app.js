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

// var app = angular.module('myApp', []);
 
// app.controller('MainCtrl', function($scope) {
//     $scope.someBoolean = true;
//     $scope.someFunctionThatReturnsABoolean = function () {
//         return true;
//     };
//     $scope.someFunctionThatReturnsSomething = function () {
//         return 'Bonjour';
//     };
//     $scope.someInteger = 3;
// });