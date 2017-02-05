app.factory('studentskiServis', ['$log', function($log)
{

  var studenti = _getStudentiBaza();

  return {
    initStudent: initStudent,
    resolveGender: resolveGender,
    getStudenti: getStudenti,
    addStudent: addStudent,
    removeStudent: removeStudent,
    updateStudent: updateStudent,
    readStudent: readStudent
  }

  function addStudent (student) {
    $log.debug('studentskiServis.addStudent()');

    studenti.push(student);
  }

  function getStudenti () {
    $log.debug('studentskiServis.getStudenti()'); 
    
    return studenti;
  }

  function removeStudent (index) {
    $log.debug('studentskiServis.removeStudent()');

    studenti.splice(index, 1);
  }

  function readStudent (index) {
    $log.debug('studentskiServis.readStudent()');

    return studenti[index];
  }

  function updateStudent (student, index) {
    $log.debug('studentskiServis.updateStudent()');

    studenti[index] = student;
  }

  function _getStudentiBaza () {
    var studenti = [
      {
        name: 'Marko',
        lastName: 'Letic',
        faculty: 'FTN',
        index: 222,
        avg: 11,
        year: 2019,
        gender: 'male'
      },
      {
        name: 'Dejan',
        lastName: 'Adamovic',
        faculty: 'FTN',
        index: 222,
        avg: 11,
        year: 2019,
        gender: 'male'
      },
      {
        name: 'Marko',
        lastName: 'Letic',
        faculty: 'FTN',
        index: 222,
        avg: 11,
        year: 2019,
        gender: 'male'
      },
      {
        name: 'Dejan',
        lastName: 'Adamovic',
        faculty: 'FTN',
        index: 222,
        avg: 11,
        year: 2019,
        gender: 'male'
      },
      {
        name: 'Marko',
        lastName: 'Letic',
        faculty: 'FTN',
        index: 222,
        avg: 11,
        year: 2019,
        gender: 'male'
      }
    ];

    return studenti;
  }

  function initStudent() {
     var student = {
          name: '',
          lastName: '',
          faculty: '',
          index: '',
          avg: '',
          year: '',
          gender: 'male'
     };

     return student;
  }

  function resolveGender(gender) {

    var output = 'male'; 

    switch (gender) {
              case 'male':
                         output = "Muski";
                         break;
              case 'female':
                         output = "Zenski";
                         break;           
    }

    return output;
}

}]);