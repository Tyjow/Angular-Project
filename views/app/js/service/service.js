app.factory('User', function($http, $q){
	
	var factory = {
		single: false,
		call: function() {
			var deferred = $q.defer();
			if (factory.single !== false) {
				deferred.resolve(factory.single);
			}
			else {
	        	var users = $http.get('users.json')
		        	.success(function(data) {
		        	factory.single = data;
		        	deferred.resolve(factory.single);
	       			 })
		        	.error(function(data) {
			        	deferred.reject("Erreur de chargement"); 
			        });

	        	/*.then(function(result){
					var tmp = [];
					angular.forEach(result, function(response) {
						tmp.push(response.data);
					});
					return tmp;
				});*/
			}
		return deferred.promise;
	    },
    };
	return factory;
});
app.factory('Depense', function($http, $q){
	
	var factory = {
		single: false,
		call: function() {
			var deferred = $q.defer();
			if (factory.single !== false) {
				deferred.resolve(factory.single);
			}
			else {
	        	var depense = $http.get('depense.json')
		        	.success(function(data) {
		        	factory.single = data;
		        	deferred.resolve(factory.single);
	       			 })
		        	.error(function(data) {
			        	deferred.reject("Erreur de chargement"); 
			        });
			}
		return deferred.promise;
	    },
    };
	return factory;
});