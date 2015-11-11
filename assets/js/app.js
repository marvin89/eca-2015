var ecaApp = angular.module('ecaApp', ['ui.router']);
ecaApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url:"/",
			templateUrl:"templates/home.html"
		})
		.state('register', {
			url:"/register",
			templateUrl:"templates/register.html"
		})
		.state('team', {
			url:"/team",
			templateUrl:"templates/team.html"
		})
		.state('idea', {
			url:"/idea",
			templateUrl:"templates/idea.html"
		})
		.state('juryFeedback', {
			url:"/juryFeedback",
			templateUrl:"templates/juryFeedback.html"
		})
		.state('feedback', {
			url:"/feedback",
			templateUrl:"templates/feedback.html"
		})
		.state('login', {
			url:"/login",
			templateUrl:"templates/login.html"
		});
})
