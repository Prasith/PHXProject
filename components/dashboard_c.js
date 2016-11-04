//Controleur

	previaApp.controller('myCtrl', function($scope) {

//Fonction pour le changement de couleur du bouton

		$scope.buttonToggle = function(buttonNumber){

			this.pickChosen = buttonNumber ;
			this.pickChosen? 0:buttonNumber;


	console.log($scope.data);
	console.log(buttonNumber);

	}


//scope du graph

	$scope.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	$scope.donnee1 = [1388, 1592, 803, 819, 1566, 1552, 3012, 1648, 2652, 1932, 2634, 2543, 3912, 1934, 1875, 2734, 1633, 822, 2943, 893, 1633, 1749, 1636, 2494]; 
	$scope.donnee2 = [2666, 2032, 1953, 1863, 2753, 903, 995, 3443, 2652, 1932, 2634, 2543, 2912, 1934, 1875, 2734, 1633, 822, 2943, 1893, 1633, 1749, 1636, 2794];
	$scope.donnee3 = [3086, 2042, 2953, 1363, 2793, 1543, 2295, 1343, 1452, 1932, 2634, 2343, 2212, 1234, 835, 2034, 1333, 1322, 2323, 1893, 1633, 4249, 1536, 2194];
	

	$scope.labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
	
	$scope.colors = ['#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD',
	'#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD', '#97BBCD'];

//scope du select

	$scope.year = [2016, 2015, 2014];
	$scope.SelectYear = 2016;

	$scope.place = ['Travail', 'Loisir', 'Parc'];
	$scope.SelectPlace = 'Travail';

	$scope.road = ['A86', 'N104', 'A4'];
	$scope.SelectRoad = 'A86';

	$scope.segment = ['Paris-Amien', 'Lille-Lyon', 'Rennes-Dijon'];
	$scope.SelectSegment ='Paris-Amien';

//scope valeur bottom

	$scope.perturbation =['Risque Moyen'];
	$scope.max = ['3000 à 10h'];
	$scope.effectif = [3];
	$scope.cumul = [40000];

	});


	/* Autre fonction de fonctionner plus barbare
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