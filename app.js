var previaApp = angular.module('previaApp',['chart.js','ui.bootstrap.datetimepicker', 'ngRoute']);

	previaApp.config(function($routeProvider) {
    $routeProvider
    	.when("/dashboard", {
	        templateUrl : "components/dashboard/dashboard.html",
	        controller : "myCtrl"
	        })
	    .when("/home", {
	        templateUrl : "components/home/home.html"
    	})
	});

