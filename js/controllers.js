'use strict';

/* Controllers */

imgApp.controller('mainCtrl', ['$scope', '$http' , '$log',function($scope, $http , $log) {
  
 }]);

imgApp.controller('Day1Ctrl', ['$scope', '$http' , '$log',function($scope, $http , $log) {
  $http.get('images/images1.json').success(function(data){
	$scope.dayOneImg = data;
  });
 }]);

imgApp.controller('Day2Ctrl', ['$scope', '$http' , '$log',function($scope, $http , $log) {
  $http.get('images/images2.json').success(function(data){
	$scope.dayTwoImg = data;
  });
 }]);

imgApp.controller('Day3Ctrl', ['$scope', '$http' , '$log',function($scope, $http , $log) {
  $http.get('images/images3.json').success(function(data){
	$scope.dayThreeImg = data;
  });
 }]);

