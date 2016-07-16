'use strict';

describe('Serviço de Curso', function () {

  // load the service's module
  beforeEach(module('internetsistemasApp'));

  // instantiate service
  var cursoService;
  beforeEach(inject(function (_cursoService_) {
    cursoService = _cursoService_;
  }));

  it('deve carregar todos os cursos na pasta dados/', function () {
    var cursos = [];

    cursoService.getAll().then(function(result) {
      cursos = result.data;

      expect(cursos.length).toBe(3);
    });
  });

  it('deve carregar AngularJS como primeiro curso', function () {
    var cursos = [];

    cursoService.getAll().then(function(result) {
      cursos = result.data;

      expect(cursos[0].nome).toEqual("AngularJS");
    });
  });

  it('deve carregar React como último curso', function () {
    var cursos = [];

    cursoService.getAll().then(function(result) {
      cursos = result.data;

      var index = cursos.length;
      expect(cursos[index].nome).toEqual("React");
    });
  });

});
