//Controleur home
previaApp.controller('contactCTRL', function($scope, $location) {

    $scope.myPath = $location.path();

   	//$scope.contact = "Contact us here from " + $scope.myPath;


   	$scope.contact = function(){

	    if ($scope.myPath == '/home'){

	    	$scope.contact = "Contact us here in home";
	    }

	    else if ($scope.myPath == '/login'){

	    	$scope.contact = "Contact us here in login";
	    }
	}

	$scope.contact();

	console.log($scope.contact);
	console.log($scope.myPath);

});