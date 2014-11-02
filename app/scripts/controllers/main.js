'use strict';

/**
 * @ngdoc function
 * @name cheeperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cheeperApp
 */
angular.module('cheeperApp')
  .controller('MainCtrl', function ($scope, $resource) {
      var Cheep = $resource('http://127.0.0.1:8000/cheeps/');
      var cheeps = Cheep.query(function() {
	  $scope.firehose = cheeps;
      });
  });
