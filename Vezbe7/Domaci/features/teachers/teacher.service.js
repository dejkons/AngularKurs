app.factory('teacherDataService', ['$log', function($log)
{

	var teachers = _getTeachersDatabase();

	return {
		getTeachers: getTeachers,
		addTeacher: addTeacher,
		removeTeacher: removeTeacher,
		updateStudent: updateStudent
	}

	function addTeacher (teacher) {
		$log.debug('teacherDataService.addTeacher()');

		teachers.push(teacher);
	}

	function getTeachers () {
		$log.debug('teacherDataService.getTeachers()');

		return teachers;
	}

	function removeTeacher (index) {
		$log.debug('teacherDataService.removeTeacher()');

		teachers.splice(index, 1);
	}

	function updateStudent (teacher, index) {
		$log.debug('teacherDataService.removeTeacher()');

		teachers[index] = teacher;
	}

	function _getTeachersDatabase () {
		var teachers = [
			{
				firstname: 'Jovan',
				lastname: 'Subotic',
				course: 'Matematika',
				dateOfBirth: '',
				salary: 40000
			},
			{
				firstname: 'Milica',
				lastname: 'Petrovic',
				course: 'Sociologija',
				dateOfBirth: '',
				salary: 43000
			},
			{
				firstname: 'Jovan',
				lastname: 'Jovanovic',
				course: 'Fizika',
				dateOfBirth: '',
				salary: 55000
			},
			{
				firstname: 'Dragan',
				lastname: 'Tadic',
				course: 'Elektronika',
				dateOfBirth: '',
				salary: 56000
			},
			{
				firstname: 'Milana',
				lastname: 'Ostojic',
				course: 'Programiranje',
				dateOfBirth: '',
				salary: 43000
			}
		];

		return teachers;
	}

}]);