app.factory('profesorskiServis', ['$log', function($log)
{

  var profesori = _getProfesoriBaza();

  return {
    initTeacher: initTeacher,
    getTeachers: getTeachers,
    addTeacher: addTeacher,
    removeTeacher: removeTeacher,
    updateTeacher: updateTeacher,
    readTeacher: readTeacher
  }

  function addTeacher (teacher) {
    $log.debug('profesorskiServis.addTeacher()');

    profesori.push(teacher);
  }

  function getTeachers () {
    $log.debug('profesorskiServis.getTeachers()'); 
    
    return profesori;
  }

  function removeTeacher (index) {
    $log.debug('profesorskiServis.removeTeacher()');

    profesori.splice(index, 1);
  }

  function readTeacher (index) {
    $log.debug('profesorskiServis.readTeacher()');

    return profesori[index];
  }

  function updateTeacher (teacher, index) {
    $log.debug('profesorskiServis.updateTeacher()');

    profesori[index] = teacher;
  }

  function _getProfesoriBaza () {
    var profesori = [
      {
        name: 'Marko',
        lastName: 'Letic',
        subject: 'Math',
        paycheck: 123123,
        year: 2019
      },
      {
        name: 'Dejan',
        lastName: 'Adamovic',
        subject: 'English',
        paycheck: 123123,
        year: 2018
      },
      {
        name: 'Marko',
        lastName: 'Letic',
        subject: 'Math',
        paycheck: 123123,
        year: 2019
      },
      {
        name: 'Dejan',
        lastName: 'Adamovic',
        subject: 'English',
        paycheck: 123123,
        year: 2018
      },
      {
        name: 'Marko',
        lastName: 'Letic',
        subject: 'Math',
        paycheck: 123123,
        year: 2019
      }
    ];

    return profesori;
  }

  function initTeacher() {
     var teacher = {
          name: '',
          lastName: '',
          subject: '',
          paycheck: '',
          year: ''
     };

     return teacher;
  }

}]);