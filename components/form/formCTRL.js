previaApp.controller('formCtrl', function($scope) {
    $scope.master = {firstName:"", lastName:""};
    $scope.reset = function() {
       	$scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});