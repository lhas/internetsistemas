'use strict';

/**
 * @ngdoc function
 * @name internetsistemasApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the internetsistemasApp
 */
angular.module('internetsistemasApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

  });
