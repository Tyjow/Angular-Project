var app = angular.module('proApp', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'partials/home.html', controller: 'UsersCtrl'})
		.when('/depense', {templateUrl: 'partials/depense.html', controller: 'DepenseCtrl'})
		.otherwise({redirectTo : '/'});
});