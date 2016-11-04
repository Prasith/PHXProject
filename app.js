	var previaApp = angular.module('previaApp',['chart.js','ui.bootstrap.datetimepicker', 'ngRoute']);


	previaApp.config(function($routeProvider) {
    $routeProvider
    //.when("/", {
    //    templateUrl : "main.html",
 	//   })
    .when("/dashboard", {
        templateUrl : "components/dashboard.html",
        controller : "myCtrl"
    })
});

