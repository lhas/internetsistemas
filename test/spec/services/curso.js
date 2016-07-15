'use strict';

describe('Service: curso', function () {

  // load the service's module
  beforeEach(module('internetsistemasApp'));

  // instantiate service
  var curso;
  beforeEach(inject(function (_curso_) {
    curso = _curso_;
  }));

  it('should do something', function () {
    expect(!!curso).toBe(true);
  });

});
