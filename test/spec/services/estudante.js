'use strict';

describe('Serviço de Estudante', function () {

  // load the service's module
  beforeEach(module('internetsistemasApp'));

  // instantiate service
  var estudanteService;
  beforeEach(inject(function (_estudanteService_) {
    estudanteService = _estudanteService_;
  }));

  it('deve carregar todos os estudantes na pasta dados/', function () {
    var estudantes = [];

    estudanteService.getAll().then(function(result) {
      estudantes = result.data;

      expect(estudantes.length).toBe(3);
    });
  });

  it('deve carregar Luiz Almeida como primeiro estudante', function () {
    var estudantes = [];

    estudanteService.getAll().then(function(result) {
      estudantes = result.data;

      expect(estudantes[0].nome).toEqual("Luiz Almeida");
    });
  });

  it('deve carregar Felipe como último estudante', function () {
    var estudantes = [];

    estudanteService.getAll().then(function(result) {
      estudantes = result.data;

      var index = estudantes.length;
      expect(estudantes[index].nome).toEqual("Felipe");
    });
  });

});
