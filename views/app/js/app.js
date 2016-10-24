var app = angular.module('proApp', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'partials/home.html', controller: 'DataCtrl'})
		.when('/depense', {templateUrl: 'partials/depense.html', controller: 'DataCtrl'})
		.otherwise({redirectTo : '/'});
});