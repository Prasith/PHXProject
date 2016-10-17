var previaApp = angular.module('previaApp',[]);

previaApp.controller('myCtrl', ['$scope', function($scope) {

	$scope.buttonToggle = function(buttonNumber){

		this.pickChosen = buttonNumber === this.pickChosen? 0:buttonNumber;

}
  }]);