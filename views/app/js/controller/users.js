app.controller('UsersCtrl', function($scope, User){
	var tab = User.find()
	.then(function (data) {
	  $scope.recs = data;
	})
});