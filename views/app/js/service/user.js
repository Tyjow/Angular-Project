app.factory('User', function($http, $q){
	
	var factory = {
		single : false,
		find: function() {
	        var deferred = $q.defer();
	        if (factory.single !== false){
				deferred.resolve(factory.single);
			}
			else {
		        $http.get('users.json')
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
      	get: function() {
	        var deferred = $q.defer();
	        if (factory.single !== false){
				deferred.resolve(factory.single);
			}
			else {
	        $http.get('depense.json')
		        .success(function(data) {
		        	deferred.resolve(data);
		        })
		        .error(function(data) {
		        	deferred.reject("Erreur de chargement"); 
		        });
			}

        return deferred.promise;
      	},
      	getFromId : function(id) {
      		var deferred = $q.defer();
      		var arr;
			var arrs = factory.get().then(function(arrs){
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