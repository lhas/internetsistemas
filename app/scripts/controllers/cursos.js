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
    $scope.editando = -1;

    cursoService.getAll().then(function(result) {
      $scope.cursos = result.data;
    });

    $scope.manipularModal = function(param) {
      angular.element("#modal-formulario").modal(param);
    }

    $scope.salvar = function(curso, formulario) {
      curso.modifiedAt = new Date();

      if($scope.editando == -1) {
        curso.createdAt = new Date();
        $scope.cursos.push(curso);
      } else {
        var index = $scope.editando;
        $scope.cursos[index] = curso;
      }

      $scope.curso = {};
      $scope.editando = -1;
      $scope.manipularModal("hide");

      formulario.$setPristine();
      formulario.$setUntouched();
    }

    $scope.excluir = function(index) {
      $scope.cursos.splice(index, 1);
      $scope.curso = {};
    }

    $scope.editar = function(index) {
      $scope.editando = index;
      $scope.curso = angular.copy($scope.cursos[index]);
      $scope.manipularModal("show");
    }
  });
