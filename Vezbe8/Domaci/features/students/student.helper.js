app.factory('studentHelper', ['$log', '$http', '$q', function($log, $http, $g) {

        return  {
        	addStudentComplete:addStudentComplete,
        	addStudentFailed:addStudentFailed,
        	getStudentsComplete:getStudentsComplete,
            getStudentsFailed:getStudentsFailed,
            removeStudentComplete:removeStudentComplete,
            removeStudentFailed:removeStudentFailed,
            updateStudentComplete:updateStudentComplete,
            updateStudentFailed:updateStudentFailed

        }

        function addStudentComplete(response) {
			$log.debug('studentHelper.addStudentComplete()');

			return response.data;
		}

		function addStudentFailed(error) {
			$log.error('studentHelper.addStudentFailed()');

			$log.error('Adding new student failed with status: ' + error.status);
			return $q.reject(error);
		}

		function getStudentsComplete(response) {
			$log.debug('studentHelper.getStudentsComplete()');

			return response.data;
		}

		function getStudentsFailed(error) {
			$log.error('studentHelper.getStudentsFailed()');

			$log.error('Getting students failed with status: ' + error.status);
			return $q.reject(error);
		}
		
		function removeStudentComplete(response) {
			$log.debug('studentHelper.removeStudentComplete()');

			return response.data;
		}

		function removeStudentFailed(error) {
			$log.error('studentHelper.removeStudentFailed()');

			$log.error('Removing student failed with status: ' + error.status);
			return $q.reject(error);
		}
		
		function updateStudentComplete(response) {
			$log.debug('studentDataService.updateStudentComplete()');

			return response.data;
		}

		function updateStudentFailed(error) {
			$log.error('studentDataService.updateStudentFailed()');

			$log.error('Adding new student failed with status: ' + error.status);
			return $q.reject(error);
		}

}]);