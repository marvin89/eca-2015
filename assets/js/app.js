var ecaApp = angular.module('ecaApp', ['ui.router']);
ecaApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url:"/",
			templateUrl:"home.html"
		})
		.state('register', {
			url:"/register",
			templateUrl:"register.html"
		})
		.state('team', {
			url:"/team",
			templateUrl:"team.html"
		})
		.state('idea', {
			url:"/idea",
			templateUrl:"idea.html"
		})
		.state('juryFeedback', {
			url:"/juryFeedback",
			templateUrl:"juryFeedback.html"
		})
		.state('feedback', {
			url:"/feedback",
			templateUrl:"feedback.html"
		})
		.state('login', {
			url:"/login",
			templateUrl:"login.html"
		});
})