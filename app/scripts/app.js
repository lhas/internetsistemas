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
    'yaru22.angular-timeago',
    'valdr'
  ])
  .config(function(valdrProvider) {
    valdrProvider.addConstraints({
      'Estudante': {
        'nome': {
          'size': {
            'min': 2,
            'max': 20,
            'message': 'Nome deve ter entre 2 e 20 caracteres.'
          },
          'required': {
            'message': 'Nome é obrigatório.'
          }
        },
        'sexo': {
          'required': {
            'message': 'Sexo é obrigatório.'
          }
        },
        'email': {
          'required': {
            'message': 'E-mail é obrigatório.'
          }
        },
        'data_de_nascimento': {
          'required': {
            'message': 'Data de Nascimento é obrigatório.'
          }
        },
      },
      'Curso': {
        'nome': {
          'size': {
            'min': 2,
            'max': 20,
            'message': 'Nome deve ter entre 2 e 20 caracteres.'
          },
          'required': {
            'message': 'Nome é obrigatório.'
          }
        }
      }
    })
  })
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
