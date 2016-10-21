app.controller('DepenseCtrl', function($scope, User){
	
	var depenses = User.call().then(function(result){
		var tmp = [];
		angular.forEach(result, function(response) {
			tmp.push(response.data);
		});
		return tmp;
	}).then(function(tmpResult) {
	  $scope.depenses = tmpResult[1];
	});
	/*User.getFromId(67).then(function(obj){
		$scope.obj = obj;
		
		console.log($scope.obj);
	});*/
});