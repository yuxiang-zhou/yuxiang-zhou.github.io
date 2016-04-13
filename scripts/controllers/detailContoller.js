'use strict';
/**
 * @ngdoc function
 * @name marketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marketApp
 */

angular.module('resume').controller(
  'DetailCtrl',
  [
    '$scope', '$rootScope', '$http', '$timeout', '$state', '$stateParams',
    function (
      $scope, $rootScope, $http, $timeout, $state, $stateParams
    ) {
      $scope.firstname = 'Yuxiang';
      $scope.lastname = 'Zhou';
      $scope.fullname = $scope.firstname + ' ' + $scope.lastname;
    }
  ]
);
