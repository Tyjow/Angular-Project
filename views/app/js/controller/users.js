app.controller('UsersCtrl', function($scope, User){

	var recs = User.call().then(function(result){
		var tmp = [];
		angular.forEach(result, function(response) {
			tmp.push(response.data);
		});
		return tmp;
	}).then(function(tmpResult) {
		$scope.recs = tmpResult[0].records;
	});
});