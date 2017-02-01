app.controller('StudentController', ['$scope', '$log', 'studentskiServis', function($scope, $log, studentskiServis)
{

	var self = this;

	self.student = {
		ime: '',
		prezime: '',
		fakultet: '',
		index: '',
		prosek: '',
		godinaUpisa: ''
	};
	self.studenti = studentskiServis.getStudenti();
	self.studentZaIspis = {};

	self.dodajStudenta = function () {
		$log.debug('StudentController.dodajStudenta()');

		studentskiServis.addStudent(self.student);
		self.studenti = studentskiServis.getStudenti();
		studentskiServis._removeStudent();
	};

	self.obrisiStudenta = function (index) {
		$log.debug('StudentController.obrisiStudenta()');

		self.studenti.splice(index, 1);
	};

	//DOMACI
	self.editStudenta = function (index) {
		$log.debug('StudentController.editStudenta()');

		self.student = self.studenti[index];
	};


}]);