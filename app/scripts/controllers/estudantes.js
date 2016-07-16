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
    $scope.estudante = {};
    $scope.editando = -1;

    estudanteService.getAll().then(function(result) {
      $scope.estudantes = result.data;
    });

    $scope.manipularModal = function(param) {
      angular.element('#modal-formulario').modal(param);
    };

    $scope.salvar = function(estudante, formulario) {
      estudante.modifiedAt = new Date();

      if($scope.editando === -1) {
        estudante.createdAt = new Date();
        $scope.estudantes.push(estudante);
      } else {
        var index = $scope.editando;
        $scope.estudantes[index] = estudante;
      }

      $scope.estudante = {};
      $scope.editando = -1;
      $scope.manipularModal('hide');

      formulario.$setPristine();
      formulario.$setUntouched();
    };

    $scope.excluir = function(index) {
      $scope.estudantes.splice(index, 1);
      $scope.estudante = {};
    };

    $scope.editar = function(index) {
      $scope.editando = index;
      $scope.estudante = angular.copy($scope.estudantes[index]);
      $scope.manipularModal('show');
    };
  });
