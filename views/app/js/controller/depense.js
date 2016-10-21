app.controller('DepenseCtrl', function($scope, User){

	var depenses = User.call().then(function(result){
		var tmp = [];
		angular.forEach(result, function(response) {
			tmp.push(response.data);
		});
		return tmp;
	}).then(function(tmpResult) {

		angular.forEach(tmpResult[1].records, function(value, key) {
			//console.log(value);
			value = tmpResult[1].records[key].Concernes;
			value = parseInt(value);
			var userId = tmpResult[0].records[key].Id;
			userId = parseInt(userId);
			var userName = tmpResult[0].records[key].username;
			userId = userName;
			//console.log(value);
			//console.log(tmpResult[0].records[key].Id);
			//console.log(value.Concernes);

			value = userId;
			//console.log(value);
		});
		//console.log(tmpResult[1].records[0].Concernes);
		/*$scope.depenses = tmpResult[1].records;
		console.log(tmpResult[0].records);
		console.log(tmpResult[1].records[2].Concernes);*/
	});
	/*User.getFromId(67).then(function(obj){
		$scope.obj = obj;
		
		console.log($scope.obj);
	});*/
});