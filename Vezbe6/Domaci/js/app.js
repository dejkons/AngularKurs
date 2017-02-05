var app = angular.module("myApp",['ui.router']);

app.config(function ($logProvider) {
	$logProvider.debugEnabled(false);
});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/students');
	
	$stateProvider
		.state('students', {
			url: '/students',
			templateUrl: 'js/student/student.template.html',
		})
		.state('teachers', {
			url: '/teachers',
			templateUrl: 'js/teacher/teacher.template.html',
		});
}]);