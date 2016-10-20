app.factory('User', function($http, $q){
	
	var factory = {
		single : false,
		call: function() {
	        var deferred = $q.defer();
	        if (factory.single !== false){
				deferred.resolve(factory.single);
			}
			else {
		        var users = $http.get('users.json').success(function(data) {
			        factory.single = data;
			        console.log("users");
			        console.log(data);
			        deferred.resolve(factory.single);
			    }),
		        	depense = $http.get('depense.json').success(function(data) {
			        factory.single = data;
			        console.log("depense");
			        console.log(data);
			        deferred.resolve(factory.single);
			    });	        	
		        /*$q.all([users,depense]).then(function(data){
		        	console.log('Both promises have resolved', data);
		        });*/
			}

		console.log(deferred.promise);
        return deferred.promise;
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