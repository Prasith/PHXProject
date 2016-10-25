var previaApp = angular.module('previaApp',['chart.js']);

previaApp.controller('myCtrl', function($scope) {

	$scope.buttonToggle = function(buttonNumber){

		this.pickChosen = buttonNumber === this.pickChosen? 0:buttonNumber;

console.log($scope.data);
console.log(buttonNumber);

}


 $scope.labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
 // $scope.series = ['Series A', 'Series B'];

 $scope.data = [];

$scope.donnee1 = [1388, 592, 803, 819, 566, 552, 3012, 648, 2652, 932, 2634, 2543, 3912, 934, 875, 2734, 633, 822, 2943, 893, 633, 749, 636, 2494]; 
$scope.donnee2 = [2666, 2032, 1953, 863, 2753, 903, 995, 3443, 2652, 932, 2634, 2543, 2912, 934, 875, 2734, 633, 822, 2943, 893, 633, 749, 636, 2794];
$scope.donnee3 = [3086, 2042, 2953, 1363, 2793, 543, 2295, 343, 452, 932, 2634, 2343, 2212, 1234, 835, 2034, 333, 1322, 2323, 893, 633, 4249, 536, 2194];
$scope.colors = ['#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD',
'#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD'];

console.log($scope.colors);

});

/*
app.controller("BarCtrl", function ($scope) {
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
    [67, 56, 34, 78, 36, 27, 78],
    [86, 56, 75, 28, 39, 65, 98]

  ];
});

/*
if (buttonNumber == 0){

$scope.data = donnee1;
}

else if ( buttonNumber == 1){

$scope.data = donnee2;

}

else 

$scope.data = donnee3;

}
*/