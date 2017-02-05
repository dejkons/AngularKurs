app.controller('appController2', ['$log','profesorskiServis', '$scope', function($log, profesorskiServis, $scope) {
    var self = this;

    self.profesor = profesorskiServis.initTeacher();     // init profesor object
    self.profesorForOutput = {};                         // profesor for output
    self.profesors = profesorskiServis.getTeachers();    // profesors array for ng-repeat in table
    self.isEdit = false;                                 // is edit mode now?  
    self.editIndex = 0;                                  // profesor array index which is edit - if edit mode

    self.SnimiProfesora = function() {
          self.profesorForOutput = angular.copy(self.profesor);
          profesorskiServis.addTeacher(self.profesorForOutput); 
          self.profesors = profesorskiServis.getTeachers();
          self.profesor = profesorskiServis.initTeacher();
          
          self.isEdit = false;

    };

    self.ObrisiProfesora = function(index) {
          profesorskiServis.removeTeacher(index);
          self.profesors = profesorskiServis.getTeachers();

          if ((self.isEdit == true) && (self.editIndex >= 0)) {
               if (self.editIndex == index) {
               	     self.PrekidIzmeneProfesora();
               }
          }
    };

    self.UcitajProfesora = function(index) {
          self.profesor = angular.copy(profesorskiServis.readTeacher(index));

  	      self.isEdit = true;
  	      self.editIndex = index;
    };

    self.IzmeniProfesora = function() {
          if ((self.isEdit == true) && (self.editIndex >= 0)) {
          	   var tempProfesor =  angular.copy(self.profesor);
               profesorskiServis.updateTeacher(tempProfesor, self.editIndex);
               self.profesors = profesorskiServis.getTeachers(); 
          }
    };

    self.PrekidIzmeneProfesora = function() {
          self.isEdit = false;
	        self.editIndex = 0;
	        self.profesor = profesorskiServis.initTeacher();
    };

    self.OtvoriForm = function() {
          self.isEdit = true;
          self.editIndex = -1;
          self.student = profesorskiServis.initTeacher();
    }
}]); 

