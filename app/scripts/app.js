'use strict';

/**
 * @ngdoc overview
 * @name internetsistemasApp
 * @description
 * # internetsistemasApp
 *
 * Main module of the application.
 */
angular
  .module('internetsistemasApp', [
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'yaru22.angular-timeago'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/estudantes', {
        templateUrl: 'views/estudantes.html',
        controller: 'EstudantesCtrl',
        controllerAs: 'estudantes'
      })
      .when('/cursos', {
        templateUrl: 'views/cursos.html',
        controller: 'CursosCtrl',
        controllerAs: 'cursos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
