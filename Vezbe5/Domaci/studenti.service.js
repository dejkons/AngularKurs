app.factory('studentskiServis', ['$log', function($log)
{

	var studenti = [
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: 222,
			prosek: 11,
			godinaUpisa: 2019
		},
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: 222,
			prosek: 11,
			godinaUpisa: 2019
		},
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: 222,
			prosek: 11,
			godinaUpisa: 2019
		},
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: 222,
			prosek: 11,
			godinaUpisa: 2019
		},
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: 222,
			prosek: 11,
			godinaUpisa: 2019
		}
	];

	return {
		getStudenti: getStudenti,
		addStudent: addStudent,
		removeStudent: removeStudent,
		editStudent: editStudent,
		initStudent: initStudent
	}

	function addStudent (student) {
		$log.debug('studentskiServis.addStudent()');
        var newStudent = angular.copy(student);
		studenti.push(newStudent);
	}
	function getStudenti () {
		$log.debug('studentskiServis.getStudenti()');

		return studenti;
	}
	function removeStudent (index) {
		$log.debug('studentskiServis.removeStudent()');

		studenti.splice(index, 1);
	}
	function editStudent (index, student) {
		$log.debug('studentskiServis.editStudent()');
 
		studenti[index] = student;
	}
	function initStudent () {
		$log.debug('studentskiServis.initStudent()');
		
		return student = {
			ime: '',
			prezime: '',
			fakultet: '',
			index: '',
			prosek: '',
			godinaUpisa: ''
		};
	}

}]);