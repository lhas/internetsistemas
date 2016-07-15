'use strict';

describe('Controller: EstudantesCtrl', function () {

  // load the controller's module
  beforeEach(module('internetsistemasApp'));

  var EstudantesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EstudantesCtrl = $controller('EstudantesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EstudantesCtrl.awesomeThings.length).toBe(3);
  });
});
