app.controller('DataCtrl', function($scope, User, Depense){

	User.call().then(function(value){
		$scope.users = value.records;
		$scope.aUsers = [];
        for($user in $scope.users){
            $scope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
        }
        /*angular.forEach($scope.users, function(value, key) {
        	key = value.Id;
        	value.Id = value.username;
			this.push(value.Id);
			console.log(key + ": "+ value.Id);
		}, $scope.aUsers);
		console.log($scope.aUsers);*/
	});
	Depense.call().then(function(value){
		$scope.depenses = value.records;
		$scope.aDepenses = [];
		for($depense in $scope.depenses){
            $scope.aDepenses[$scope.depenses[$depense].Payeur] = $scope.users[$user].username;
        }
	});
	
});