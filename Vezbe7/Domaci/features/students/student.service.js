app.factory('studentDataService', ['$log', '$http', '$q', function($log, $http, $q)
{

	//var rootUrl = 'https://angularkurs.firebaseio.com/';
	var rootUrl = 'https://angularkurs-59381.firebaseio.com/';

	return {
		getStudents: getStudents,
		addStudent: addStudent,
		removeStudent: removeStudent,
		updateStudent: updateStudent
	}

	function addStudent (student) {
		$log.debug('studentDataService.addStudent()');

		return $http({
			url: rootUrl + 'students.json',
			timeout: 10000,
			method: "POST",
			data: student,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
			}
		})
		.then(addStudentComplete)
		.catch(addStudentFailed);

		function addStudentComplete(response) {
			$log.debug('studentDataService.addStudentComplete()');

			return response.data;
		}

		function addStudentFailed(error) {
			$log.error('studentDataService.addStudentFailed()');

			$log.error('Adding new student failed with status: ' + error.status);
			return $q.reject(error);
		}
	}

	function getStudents () {
		$log.debug('studentDataService.getStudents()');

		return $http({
			url: rootUrl + 'students.json',
			timeout: 10000,
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
			}
		})
		.then(getStudentsComplete)
		.catch(getStudentsFailed);

		function getStudentsComplete(response) {
			$log.debug('studentDataService.getStudentsComplete()');

			return response.data;
		}

		function getStudentsFailed(error) {
			$log.error('studentDataService.getStudentsFailed()');

			$log.error('Getting students failed with status: ' + error.status);
			return $q.reject(error);
		}
	}

	function removeStudent (index) {
		$log.debug('studentDataService.removeStudent()');

		return $http({
			url: rootUrl + 'students/' + index + '/.json',
			timeout: 10000,
			method: 'DELETE',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
			}
		})
		.then(removeStudentComplete)
		.catch(removeStudentFailed);

		function removeStudentComplete(response) {
			$log.debug('studentDataService.removeStudentComplete()');

			return index;
		}

		function removeStudentFailed(error) {
			$log.error('studentDataService.removeStudentFailed()');

			$log.error('Getting students failed with status: ' + error.status);
			return $q.reject(error);
		}

	}

	function updateStudent (student, index) {
		$log.debug('studentDataService.removeStudent()');

		students[index] = student;
	}

}]);