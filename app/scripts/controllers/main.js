'use strict';

/**
 * @ngdoc function
 * @name cheeperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cheeperApp
 */
angular.module('cheeperApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
