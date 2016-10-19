app.controller('DepenseCtrl', function($scope, User){
	var depenses = User.get()
	.then(function (data) {
		$scope.depenses = data;
	});
	User.getFromId(67).then(function(obj){
		$scope.obj = obj;
		
		console.log($scope.obj);
	});
});