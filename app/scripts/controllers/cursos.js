'use strict';

/**
 * @ngdoc function
 * @name internetsistemasApp.controller:CursosCtrl
 * @description
 * # CursosCtrl
 * Controller of the internetsistemasApp
 */
angular.module('internetsistemasApp')
  .controller('CursosCtrl', function ($scope, cursoService) {
    $scope.cursos = [];
    $scope.curso = {};

    cursoService.getAll().then(function(result) {
      $scope.cursos = result.data;
    });

    $scope.excluir = function(index) {
      $scope.cursos.splice(index, 1);
      $scope.curso = {};
    }

    $scope.editar = function(index) {
      $scope.curso = $scope.cursos[index];

      angular.element("#modal-formulario").modal("show");
    }
  });
