app.controller('UsersCtrl', function($scope, User){
	$scope.newUser = {};
	$scope.records = User.find();
	console.error($scope.records);
	$scope.addUser = function (){
		$scope.records.push($scope.newUser);
		$scope.newUser = {};
	}
});