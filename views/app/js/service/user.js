app.factory('User', function($http, $q){
	
	var factory = {
		records: false,
		find : function(){
			var deferred = $q.defer();
			if (factory.records !== false){
				deferred.resolve(factory.records);
			}
			else {
				$http.get('users.json')
					.success(function(data){
						factory.records = data;
						deferred.resolve(factory.records);
					})
					.error(function(data, status){
						deferred.reject('Impossible de récupérer le fichier');
					});
			}
			return deferred.promise;
		}
	}
	return factory;
});