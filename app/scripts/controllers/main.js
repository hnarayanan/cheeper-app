'use strict';

/**
 * @ngdoc function
 * @name cheeperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cheeperApp
 */
angular.module('cheeperApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http({method: 'GET', url: 'http://127.0.0.1:8000/cheeps/'}).
      success(function(data) {
        $scope.firehose = data;
      }).
      error(function() {
    });
  });
