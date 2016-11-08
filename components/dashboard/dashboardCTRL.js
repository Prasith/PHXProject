//Controleur
previaApp.controller('myCtrl', function($scope, previaData)  {

//Fonction pour le changement de couleur du bouton

	$scope.buttonToggle = function(buttonNumber){
		this.pickChosen = buttonNumber;
		this.pickChosen? 0:buttonNumber;
	}

//scope du graph

	$scope.data = previaData.data;
	$scope.donnee1 = previaData.donnee1;
	$scope.donnee2 = previaData.donnee2;
	$scope.donnee3 = previaData.donnee3;
	$scope.labels = previaData.labels;
	$scope.colors = previaData.colors;

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
