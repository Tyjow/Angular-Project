app.controller('UsersCtrl', function($scope, User){
	console.log(User.call());
	var recs = User.call().then(function(result){
		console.log(result);
		var tmp = [];
		angular.forEach(result, function(response) {
			tmp.push(response.data);
			console.log(response.data);
		});
		console.log(tmp);
		return tmp;
	}).then(function(tmpResult) {
		console.log(tmpResult[0])
	  $scope.recs = tmpResult[0];
	  console.log($scope.recs);
	});
});