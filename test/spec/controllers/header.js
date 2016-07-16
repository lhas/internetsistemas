'use strict';

describe('Header', function () {

  // load the controller's module
  beforeEach(module('internetsistemasApp'));

  var HeaderCtrl,
    scope, location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    location = $location;
    scope = $rootScope.$new();
    HeaderCtrl = $controller('HeaderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Deve esperar home página de como ativo', function () {
    location.path('/');
    scope.$apply();
    expect(scope.isActive('/')).toBeTruthy();
  });

  it('Deve esperar página de estudantes como ativo', function () {
    location.path('/estudantes');
    scope.$apply();
    expect(scope.isActive('/estudantes')).toBeTruthy();
  });

  it('Deve esperar página de cursos como ativo', function () {
    location.path('/cursos');
    scope.$apply();
    expect(scope.isActive('/cursos')).toBeTruthy();
  });

  it('Deve esperar página home como inativa enquanto página de cursos como ativo', function () {
    location.path('/cursos');
    scope.$apply();
    expect(scope.isActive('/')).toBeFalsy();
  });
});

