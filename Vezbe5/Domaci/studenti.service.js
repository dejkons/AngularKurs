app.factory('studentskiServis', ['$log', function($log)
{

	var studenti = [
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: '222',
			prosek: '11',
			godinaUpisa: '2019'
		},
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: '222',
			prosek: '11',
			godinaUpisa: '2019'
		},
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: '222',
			prosek: '11',
			godinaUpisa: '2019'
		},
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: '222',
			prosek: '11',
			godinaUpisa: '2019'
		},
		{
			ime: 'Marko',
			prezime: 'Letic',
			fakultet: 'FTN',
			index: '222',
			prosek: '11',
			godinaUpisa: '2019'
		}
	];

	return {
		getStudenti: getStudenti,
		addStudent: addStudent
	}

	function addStudent (student) {
		$log.debug('studentskiServis.addStudent()');

		studenti.push(student);
	}
	function getStudenti () {
		$log.debug('studentskiServis.getStudenti()');

		return studenti;
	}
	function _removeStudent () {
		$log.debug('studentskiServis.removeStudent()');
	}

}]);