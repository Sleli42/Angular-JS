// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', []);

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = "Hi all, i'm a boss !";
});
