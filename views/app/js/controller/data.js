app.controller('DataCtrl', function($rootScope, $scope, User, Depense){

	User.call().then(function(value){
		$scope.users = value.records;
		$rootScope.aUsers = [];
        /*for($user in $scope.users){
            $scope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
        }*/
        angular.forEach($scope.users, function(value, key) {
        	key = value.Id;
			this[key] = value.username;
			//console.log(key + ": "+ value.username);
			//console.log($rootScope.aUsers[key]);
		}, $rootScope.aUsers);
		//console.log($rootScope.aUsers);
	});
	Depense.call().then(function(value){
		$scope.depenses = value.records;
		$scope.aDepenses = [];
		$scope.tmpUsers = [];
		$scope.tmpFalse = [];
		$scope.tmpFinal = [];
		/*for($depense in $scope.depenses){
            $scope.aDepenses[$scope.depenses[$depense].Payeur] = $scope.users[$user].username;
        }*/
        //console.log($rootScope.aUsers);
        /*angular.forEach($rootScope.aUsers, function(value, key) {
        	console.log(value);
        	$scope.tmpUsers.push(value);
        	console.log($scope.tmpUsers);
        	return $scope.tmpUsers;
        });*/
        //console.log($scope.tmpUsers);
        angular.forEach($scope.depenses, function(value, key) {
        	//console.log(value)
        	//key = Object.getOwnPropertyNames(value).sort();
        	value = value.Concernes.split(",");
        	this.push(value);
        	//console.log(tmp);
        	//tmp.splice(0);
        	//console.log($rootScope.aUsers);
        	//tmp.push($scope.tmpUsers);
        	//console.log(value);
        	/*key = value[0];
        	this.push(value);*/
        	//console.log(key[0] + ": " + value);
        	//this[key[0]]= value;
        	//console.log(this[key[0]]= value);
        }, $scope.aDepenses);
        //console.log($scope.aDepenses);
        angular.forEach($scope.aDepenses, function(value, key) {
        	//console.log(value);
        	//console.log($rootScope.aUsers[value]);
        	$scope.tmpUsers.push($rootScope.aUsers[value]);
        	//console.log($rootScope.aUsers[value]);
        	//console.log($scope.tmpUsers);
	        $scope.tmpUsers = $scope.tmpUsers.join(", ");
	        //console.log($scope.tmpUsers);
	        $scope.tmpFalse.push($scope.tmpUsers);
	        //console.log($scope.tmpFalse);
	        $scope.tmpUsers = [];
        });
        /*for($depense in $scope.depenses) {
           $scope.aConcernesFinal[$scope.depenses[$depense].Id] = $scope.aConcernesTrue[$depense];
        }*/
        angular.forEach($scope.depenses, function(value, key) {
        	key = value.Id;
        	//console.log(value);
        	//console.log($scope.tmpFalse);
        	//value.Concernes = $scope.tmpFalse;
        	this[key] = $scope.tmpFalse;
        	//console.log(value.Concernes);
        	//console.log($scope.tmpFalse[value]);
        	//console.log(key + ": "+ value.Concernes);
        }, $scope.tmpFinal);
	//console.log($scope.tmpFinal);
	});
});