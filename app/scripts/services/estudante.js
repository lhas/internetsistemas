'use strict';

/**
 * @ngdoc service
 * @name internetsistemasApp.estudanteService
 * @description
 * # estudanteService
 * Service in the internetsistemasApp.
 */
angular.module('internetsistemasApp')
  .service('estudanteService', function ($http) {

    this.getAll = function() {
      return $http.get('dados/estudantes.json');
    };
    // AngularJS will instantiate a singleton by calling 'new' on this function
  });
