var app = angular.module('MyApp', ['ui.router', 'ui.bootstrap', 'firebase']);

app.config(function ($logProvider) {
	$logProvider.debugEnabled(true);

	// Initialize Firebase
	/*var config = {
		apiKey: "AIzaSyAqhKgP3xmeL9CxvYSeUlNOPK3T1SddPvY",
		authDomain: "angularkurs.firebaseapp.com",
		databaseURL: "https://angularkurs.firebaseio.com",
		storageBucket: "angularkurs.appspot.com",
		messagingSenderId: "219706523111"
	};*/

	var config = {
	    apiKey: "AIzaSyDto6IjT2NNErsI-xAz8sAg0-561tJ1BjM",
	    authDomain: "angularkurs-59381.firebaseapp.com",
	    databaseURL: "https://angularkurs-59381.firebaseio.com",
	    storageBucket: "angularkurs-59381.appspot.com",
	    messagingSenderId: "838691860946"
	};

	firebase.initializeApp(config);
});