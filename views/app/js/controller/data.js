app.controller('DataCtrl', function($rootScope, $scope, User, Depense){

	User.call().then(function(value){
		$scope.users = value.records;
		$rootScope.aUsers = [];
        /*for($user in $scope.users){
            $scope.aUsers[$scope.users[$user].id] = $scope.users[$user].username;
        }*/
        angular.forEach($scope.users, function(value, key) {
        	key = value.id;
			this[key] = value.username;
		}, $rootScope.aUsers);
	});
	Depense.call().then(function(value){
		
		$scope.depenses = value.records;
		$scope.aConcernes = [];
        //Tableau qui stock les nom un par un et qui est ensuite join
        $scope.aConcernesElement = [];
        //Tableau avec la liste des noms mais le mauvais index
        $scope.aConcernesTrue = [];
        //Le bon tableau à utiliser
        $scope.aConcernesFinal = [];

        for($depense in $scope.depenses) {
            //On crée le tableau à explorer (le split est important car il permet de rendre ce tableau exploitable pour la boucle suivante)
            $scope.aConcernes[$depense] = $scope.depenses[$depense].concernes.split(',');
        }
        
        //le $scope.aConcernes est un tableau qui contient des tableaux (2 niveaux, donc 2 boucles for)
        for ($i=0; $i < $scope.aConcernes.length; $i++) {
            for ($x=0; $x < $scope.aConcernes[$i].length; $x++) {
                //On transforme les ID en nom.
                $scope.aConcernesElement.push($rootScope.aUsers[$scope.aConcernes[$i][$x]]);
            }
            //On join les nom pour obtenir une ligne qu'on assigne dans un tableau unique
            $scope.aConcernesElement = $scope.aConcernesElement.join(", ");
            $scope.aConcernesTrue.push($scope.aConcernesElement);
            //On réinitialise la ligne pour faire une nouvelle
            $scope.aConcernesElement = [];
        }
        
        //Cette boucle est pour créer un tableau qui a pour clés les ID des dépenses et pour valeur les lignes créer plus tôt.
        for($depense in $scope.depenses) {
            $scope.aConcernesFinal[$scope.depenses[$depense].id] = $scope.aConcernesTrue[$depense];
        }
	});
});