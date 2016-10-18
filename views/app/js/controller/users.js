app.controller('UsersCtrl', function($scope, $http){
	$scope.newUser = {};
	$scope.recs = $http.get('users.json').then(function(rec) {
        $scope.recs = rec.data.records;
    });
	/*User.find();*/
	$scope.addUser = function (){
		$scope.records.push($scope.newUser);
		$scope.newUser = {};
	}
});