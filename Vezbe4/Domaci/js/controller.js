app.controller('appController', function($scope) {
    var self = this;

    self.student = initStudent();     // init student object
    self.studentForOutput = {};       // student for output
    self.students = [];               // students array for ng-repeat in table
    self.isEdit = false;              // is edit mode now?  
    self.editIndex = 0;               // student array index which is edit - if edit mode

    self.SnimiStudenta = function() {
          self.studentForOutput = angular.copy(self.student);

          self.studentForOutput.gender = resolveGender(self.studentForOutput.gender);

          self.students.push(self.studentForOutput);
          self.student = initStudent();

          self.isEdit = false;

    };

    self.ObrisiStudenta = function(index) {
          self.students.splice(index,1);

          if ((self.isEdit == true) && (self.editIndex >= 0)) {
               if (self.editIndex == index) {
               	     self.PrekidIzmeneStudenta();
               }
          }
    };

    self.UcitajStudenta = function(index) {
     	  self.student = angular.copy(self.students[index]);

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
          	   tempStudent.gender = resolveGender(tempStudent.gender);
          	   console.log(tempStudent);
          	   self.students[self.editIndex] = tempStudent;
          }
    };

    self.PrekidIzmeneStudenta = function() {
          self.isEdit = false;
	      self.editIndex = 0;
	      self.student = initStudent();
    };
}); 

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

