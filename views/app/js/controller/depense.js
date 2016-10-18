app.controller('DepenseCtrl', function($scope, $http){
	$scope.recs = $http.get('depense.json').then(function(rec) {
        $scope.recs = rec.data.records;
    });
});