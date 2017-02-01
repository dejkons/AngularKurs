var app = angular.module('MyApp', []).config(['$logProvider', function($logProvider) {
       $logProvider.debugEnabled(false);
}]);