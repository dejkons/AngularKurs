app.factory('studentDataService', ['$log', '$http', '$q', '$firebaseObject', 'studentHelper', '$firebaseArray',
	function($log, $http, $q, $firebaseObject, studentHelper, $firebaseArray)
{

	//var rootUrl = 'https://angularkurs.firebaseio.com/';
	var rootUrl = 'https://angularkurs-59381.firebaseio.com/';
	var ref = firebase.database().ref().child("students");

	return {
		getStudents: getStudents,
		addStudent: addStudent,
		removeStudent: removeStudent,
		updateStudent: updateStudent,
		removeStudentWS: removeStudentWS,
		addStudentWS:addStudentWS,
		updateStudentWS:updateStudentWS,
		getStudentsWS:getStudentsWS
	}

	function addStudent (student) {
		$log.debug('studentDataService.addStudent()');

		return $http({
			url: rootUrl + 'students.json',
			timeout: 10000,
			method: "POST",
			data: student
		})
		.then(studentHelper.addStudentComplete)
		.catch(studentHelper.addStudentFailed);
	}

	function getStudents () {
		$log.debug('studentDataService.getStudents()');

		return $http({
			url: rootUrl + 'students.json',
			timeout: 10000,
			method: 'GET'
		})
		.then(studentHelper.getStudentsComplete)
		.catch(studentHelper.getStudentsFailed);
	}

	function removeStudent (id) {
		$log.debug('studentDataService.removeStudent()');

		return $http({
			url: rootUrl + 'students/' + id + '.json',
			timeout: 10000,
			method: 'DELETE'
		})
		.then(studentHelper.removeStudentComplete)
		.catch(studentHelper.removeStudentFailed);		
	}

	function updateStudent (student, id) {
		$log.debug('studentDataService.updateStudent()');

		return $http({
			url: rootUrl + 'students/' + id + '.json',
			timeout: 10000,
			method: "PUT",
			data: student
		})
		.then(studentHelper.updateStudentComplete)
		.catch(studentHelper.updateStudentFailed);
	}

	function addStudentWS (student) {
		$log.debug('studentDataService.addStudentWS()');

		var studentsJson = $firebaseArray(ref);

		studentsJson.$add(student).then(function(ref) {
			console.log('Uspesno dodat');
		}, function(error) {
			console.log("Error:", error);
		});
	}

	function updateStudentWS (student, id) {
		$log.debug('studentDataService.updateStudentWS()');

        var studentRef = ref.child(id).set(student);
	}

	function removeStudentWS (id) {
		$log.debug('studentDataService.removeStudentWS()');

		var studentRef = ref.child(id);
		var student = $firebaseObject(studentRef);

		student.$remove().then(function(ref) {
			console.log('Uspesno obrisan');
		}, function(error) {
			console.log("Error:", error);
		});
	}

	function getStudentsWS () {
		var students = $firebaseObject(ref);
		return students;
	}

}]);