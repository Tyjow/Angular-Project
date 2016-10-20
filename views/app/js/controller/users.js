app.controller('UsersCtrl', function($scope, User){
	var recs = User.call()
	.then(function (data) {
	  $scope.recs = data;
	})
});