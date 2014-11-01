'use strict';

/**
 * @ngdoc function
 * @name cheeperApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cheeperApp
 */
angular.module('cheeperApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
