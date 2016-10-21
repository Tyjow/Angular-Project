app.factory('User', function($http, $q){
	
	var factory = {
		call: function() {
		        var users = $http.get('users.json'),
		        	depense = $http.get('depense.json');

		        return $q.all([users,depense]);
      	},
      	getFromId : function(id) {
      		var deferred = $q.defer();
      		var arr;
			var arrs = factory.call().then(function(arrs){
				angular.forEach(arrs.records, function(value, key) {
					if (parseInt(value.Payeur) == id) {
						arr = value;
					}
				});
				deferred.resolve(arr);
			}, function(){
				deferred.reject("Erreur de chargement");
			});

		return deferred.promise;
      	},
    };
	return factory;
});