var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', function($scope) {

$scope.buttonToggle = function(buttonNumber){

this.pickChosen = buttonNumber === this.pickChosen? 0:buttonNumber;

}
  }]);