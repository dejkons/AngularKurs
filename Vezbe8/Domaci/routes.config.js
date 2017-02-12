app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/students');
	
	$stateProvider
		// HOME STATES AND NESTED VIEWS ========================================
		.state('students', {
			url: '/students',
			templateUrl: 'features/students/student.template.html'
		})
		// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
		.state('teachers', {
			url: '/teachers',
			templateUrl: 'features/teachers/teacher.template.html'
		});
}]);