//Controleur home
previaApp.controller('contactCTRL', function($scope, $location) {

    $scope.myPath = $location.path();

   	$scope.contact = "Contact us here from " + $scope.myPath;


/*
   	 function(){

	    if ($scope.myPath == '/home'){

	    	"Contact us here in home"
	    }

	    else if ($scope.myPath == '/login'){

	    	"Contact us here in login"
	    }
	}

	    $location.hash = "home";

*/
	console.log($scope.contact);
	console.log($scope.myPath);

});