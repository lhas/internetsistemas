'use strict';

/**
 * @ngdoc service
 * @name internetsistemasApp.cursoService
 * @description
 * # cursoService
 * Service in the internetsistemasApp.
 */
angular.module('internetsistemasApp')
  .service('cursoService', function ($http) {

    this.getAll = function() {
      return $http.get("dados/cursos.json");
    }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
