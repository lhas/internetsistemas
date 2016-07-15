'use strict';

/**
 * @ngdoc service
 * @name internetsistemasApp.estudante
 * @description
 * # estudante
 * Service in the internetsistemasApp.
 */
angular.module('internetsistemasApp')
  .service('estudanteService', function ($http) {

    this.getAll = function() {
      return $http.get("dados/estudantes.json");
    }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
