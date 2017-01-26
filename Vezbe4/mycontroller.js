app.controller('StudentController', function($scope) {

      var self = this;

      self.student = {
      	ime: '',
      	prezime: '',
      	fakultet: '',
        index: '',
        prosek: '',
        godinaUpisa: '' 
      }

      self.ispisiStudenta = function() {
      	   console.log(self.student);
      }
});