app.controller('StudentController', ['$scope', '$log', 'studentDataService', '$firebaseObject', function($scope, $log, studentDataService, $firebaseObject)
{
	var self = this;

	self.student = null;

	/*
	studentDataService.getStudents().then(function(students) {
		self.students = students;
	});
	*/
	var ref = firebase.database().ref().child("students");
	self.students = $firebaseObject(ref);

	self.studentZaIspis = {};

	self.dateOptions = {
		formatYear: 'yy',
		maxDate: new Date(2020, 5, 22),
		minDate: new Date(),
		startingDay: 1
	};

	self.open1 = function() {
		self.popup1.opened = true;
	};

	self.open2 = function() {
		self.popup2.opened = true;
	};

	self.popup1 = {
		opened: false
	};

	self.popup2 = {
		opened: false
	};

	self.initLoad = function () {
		$log.debug('StudentController.initLoad()');

		studentDataService.getStudents().then(function(students) {
			self.students = students;
		});
	}

	self.dodajStudenta = function () {
		$log.debug('StudentController.dodajStudenta()');

		studentDataService.addStudentWS(self.student);
		
	};

	self.obrisiStudenta = function (id) {
		$log.debug('StudentController.obrisiStudenta()');

		studentDataService.removeStudentWS(id);
	};

	self.updateStudent = function () {
		$log.debug('StudentController.editStudent()');
		
		studentDataService.updateStudent(self.student, self.id);
	};

	self.addStudentDataToEditForm = function (id) {
		$log.debug('StudentController.addStudentDataToEditForm()');

		self.student = angular.copy(self.students[id]);
		self.id = id;
	};

	self.closeDetailView = function () {
		$log.debug('StudentController.closeDetailView()');

		self.student = null;
	}


}]);