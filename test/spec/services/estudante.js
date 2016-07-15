'use strict';

describe('Service: estudante', function () {

  // load the service's module
  beforeEach(module('internetsistemasApp'));

  // instantiate service
  var estudante;
  beforeEach(inject(function (_estudante_) {
    estudante = _estudante_;
  }));

  it('should do something', function () {
    expect(!!estudante).toBe(true);
  });

});
