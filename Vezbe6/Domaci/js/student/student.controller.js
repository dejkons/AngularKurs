app.controller('appController', ['$log','studentskiServis', '$scope', function($log, studentskiServis, $scope) {
    var self = this;

    self.student = studentskiServis.initStudent();     // init student object
    self.studentForOutput = {};                        // student for output
    self.students = studentskiServis.getStudenti();    // students array for ng-repeat in table
    self.studentsList = ResolveGenderStudentList(self.students);
    self.isEdit = false;                               // is edit mode now?  
    self.editIndex = -1;                               // student array index which is edit - if edit mode

    self.SnimiStudenta = function() {
          self.studentForOutput = angular.copy(self.student);
          studentskiServis.addStudent(self.studentForOutput); 
          self.students = studentskiServis.getStudenti();
          self.studentsList = ResolveGenderStudentList(self.students);
          self.student = studentskiServis.initStudent();
          
          self.isEdit = false;

    };

    self.ObrisiStudenta = function(index) {
          studentskiServis.removeStudent(index);
          self.students = studentskiServis.getStudenti();
          self.studentsList = ResolveGenderStudentList(self.students);

          if ((self.isEdit == true) && (self.editIndex >= 0)) {
               if (self.editIndex == index) {
               	     self.PrekidIzmeneStudenta();
               }
          }
    };

    self.UcitajStudenta = function(index) {
       	  self.student = angular.copy(studentskiServis.readStudent(index));

       	  switch (self.student.gender) {
  	          	case 'Muski':
  	          	           self.student.gender = "male";
  	          	           break;
  	          	case 'Zenski':
  	          	           self.student.gender = "female";
  	          	           break;           
  	      }

  	      self.isEdit = true;
  	      self.editIndex = index;
    };

    self.IzmeniStudenta = function() {
          if ((self.isEdit == true) && (self.editIndex >= 0)) {
          	   var tempStudent =  angular.copy(self.student);
               studentskiServis.updateStudent(tempStudent, self.editIndex);
               self.students = studentskiServis.getStudenti(); 
               self.studentsList = ResolveGenderStudentList(self.students);
          }
    };

    self.PrekidIzmeneStudenta = function() {
          self.isEdit = false;
	        self.editIndex = 0;
	        self.student = studentskiServis.initStudent();
    };

    self.OtvoriForm = function() {
          self.isEdit = true;
          self.editIndex = -1;
          self.student = studentskiServis.initStudent();
    }

    function ResolveGenderStudentList (students) {
          var returnArray = [];
          students.forEach(function(item, index) {
               returnArray[index] = angular.copy(item);
               returnArray[index].gender = studentskiServis.resolveGender(item.gender);
          });

          return returnArray;
    };
}]); 

