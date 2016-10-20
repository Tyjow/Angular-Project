app.controller('DepenseCtrl', function($scope, User){
	var depenses = User.call()
	.then(function (data) {
		$scope.depenses = data;
	});
	/*User.getFromId(67).then(function(obj){
		$scope.obj = obj;
		
		console.log($scope.obj);
	});*/
});