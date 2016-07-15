'use strict';

/**
 * @ngdoc function
 * @name internetsistemasApp.controller:EstudantesCtrl
 * @description
 * # EstudantesCtrl
 * Controller of the internetsistemasApp
 */
angular.module('internetsistemasApp')
  .controller('EstudantesCtrl', function ($scope, estudanteService) {
    $scope.estudantes = [];

    estudanteService.getAll().then(function(result) {
      $scope.estudantes = result.data;
    });

    $scope.excluir = function(index) {
      $scope.estudantes.splice(index, 1);
    }
  });
