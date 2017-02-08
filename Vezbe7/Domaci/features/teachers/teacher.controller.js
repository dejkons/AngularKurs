app.controller('TeacherController', ['$scope', '$log', 'teacherDataService', function($scope, $log, teacherDataService)
{
	var self = this;

	self.teacher = null;
	self.teachers = teacherDataService.getTeachers();
	self.teacherToOutput = {};

	self.addTeacher = function () {
		$log.debug('TeacherController.addTeacher()');

		teacherDataService.addTeacher(self.teacher);
		self.teachers = teacherDataService.getTeachers();
	};

	self.removeTeacher = function (index) {
		$log.debug('TeacherController.removeTeacher()');

		teacherDataService.removeTeacher(index);
		self.teachers = teacherDataService.getTeachers();
	};

	self.updateTeacher = function () {
		$log.debug('TeacherController.updateTeacher()');
		
		teacherDataService.updateTeacher(self.teacher, self.teacher.index);
		self.teachers = teacherDataService.getTeachers();
	};

	self.addTeacherDataToEditForm = function (index) {
		$log.debug('TeacherController.addTeacherDataToEditForm()');

		self.teacher = angular.copy(self.teachers[index]);
		self.index = index;
	};

	self.closeDetailView = function () {
		$log.debug('TeacherController.closeDetailView()');

		self.teacher = null;
	};

}]);