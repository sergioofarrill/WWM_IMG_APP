'use strict';

/* App Module */

var imgApp = angular.module('imgApp', ['ngRoute']);

 imgApp.config(function($routeProvider) {
	$routeProvider

		.when('/',{
				templateUrl:'templates/main.html',
				controller:'mainCtrl'
				
			})
		
		.when('/dayOne',{
			templateUrl:'templates/day1.html',
			controller:'Day1Ctrl'
			
		})

		.when('/dayTwo',{
			templateUrl:'templates/day2.html',
			controller:'Day2Ctrl'
			
		})

		.when('/dayThree',{
			templateUrl:'templates/day3.html',
			controller:'Day3Ctrl'
		})
		
	});