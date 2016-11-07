var previaApp = angular.module('previaApp',['chart.js','ui.bootstrap.datetimepicker', 'ngRoute']);

	previaApp.config(function($routeProvider) {
    $routeProvider
    	.when("/dashboard", {
	        templateUrl : "dashboard/dashboard.html",
	        controller : "myCtrl"
    	})
	});

