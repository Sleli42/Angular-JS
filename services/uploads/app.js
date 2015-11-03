var	app = angular.module('myApp', []);

// Principal controller
app.controller('MainCtrl', ['$scope', 'userService',
	function($scope, userService) {
		$scope.userData = userService.getUserData();
	}
]);

// First service
app.service('userService', ['utilsService', '$timeout',
	function(utilsService, $timeout) {
		// private variable
		var userData = {
			firstname: 'Natasha',
			username: 'Nachatte',
			age: 25
		};

		// Getter to userData var
		this.getUserData = function() {
			// call another service
			userData.firstname = utilsService.capitalize(userData.firstname);
			return (userData);
		};

		$timeout(function() {
			userData.username = "NATASHAAAAATE";
		}, 5000);
	}
]);

// Second service
app.service("utilsService", [
	function() {
		this.capitalize = function(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		};
	}
]);