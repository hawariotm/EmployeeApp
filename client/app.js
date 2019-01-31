var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/details', {
			templateUrl:'templates/employees.html',
			controller:'empController'
		})
		.when('/salary', {
			templateUrl:'templates/salary.html',
			controller:'empController'
		})
		.when('/common', {
			templateUrl:'templates/common.html',
			controller:'empController'
		}).
		otherwise({redirectTo: '/details'});
	});
