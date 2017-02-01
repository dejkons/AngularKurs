app.controller('StudentController', ['$scope', '$log', 'studentskiServis', function($scope, $log, studentskiServis)
{

	var self = this;

    // object binded to form
	self.student = studentskiServis.initStudent();

	// array of objects used for ng-repeat
	self.studenti = studentskiServis.getStudenti();
	self.studentZaIspis = {};

	self.dodajStudenta = function () {
		$log.debug('StudentController.dodajStudenta()');

		studentskiServis.addStudent(self.student);
		self.studenti = studentskiServis.getStudenti();
        self.student = studentskiServis.initStudent();
	};

	self.obrisiStudenta = function (index) {
		$log.debug('StudentController.obrisiStudenta()');

		studentskiServis.removeStudent(index);
	};

	//DOMACI
	self.editStudenta = function (index) {
		$log.debug('StudentController.editStudenta()');
        self.student = self.studenti[index];
        studentskiServis.editStudent(index, self.studenti[index]);
		
	};


}]);