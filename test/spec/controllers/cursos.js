'use strict';

describe('Cursos', function () {

  // load the controller's module
  beforeEach(module('internetsistemasApp'));

  var CursosCtrl,
    scope, location, timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, $timeout) {
    location = $location;
    timeout = $timeout;
    scope = $rootScope.$new();
    CursosCtrl = $controller('CursosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Deve conter nenhum curso cadastrado enquanto não carrega a página', function () {
    expect(scope.cursos.length).toBe(0);
  });

  it('Deve conter nenhum curso selecionado', function () {
    expect(scope.curso).toEqual({});
  });

  it('Deve estar em modo de inserção', function () {
    expect(scope.editando).toBe(-1);
  });

  it('Deve salvar corretamente um novo curso', function () {
    var curso = {
      nome: "Abacate"
    };

    timeout(function() {
      scope.salvar(curso, false);

      expect(scope.cursos.length).toBe(4);
    });
  });

  it('Deve recuperar o novo curso corretamente', function () {
    var curso = {
      nome: "Abacate"
    };

    timeout(function() {
      scope.salvar(curso, false);

      expect(scope.cursos[3].nome).toEqual("Abacate");
    });
  });

  it('Deve excluir o novo curso corretamente', function () {
    var curso = {
      nome: "Abacate"
    };

    timeout(function() {
      scope.salvar(curso, false);

      var index = scope.cursos.length;
      scope.excluir(index);

      expect(scope.cursos.length).toBe(3);
    });
  });

  it('Deve entrar no modo de edição após clicar no botão de editar no novo curso', function () {
    var curso = {
      nome: "Abacate"
    };

    timeout(function() {
      scope.salvar(curso, false);

      var index = scope.cursos.length;
      expect(scope.cursos[index].nome).toEqual("Abacate");

      scope.editar(index);

      expect(scope.editando).toBe(index);

    });
  });

  it('Deve editar o novo curso corretamente', function () {
    var curso = {
      nome: "Abacate"
    };

    timeout(function() {
      scope.salvar(curso, false);

      var index = scope.cursos.length;
      expect(scope.cursos[index].nome).toEqual("Abacate");

      scope.editar(index);

      curso.nome = "Abacate666";

      scope.salvar(curso, null);

      expect(scope.cursos[index].nome).toEqual("Abacate666");
    });
  });

  it('Deve conter os 3 cursos cadastrados na mão depois de carregar a página', function () {
    timeout(function() {
      expect(scope.cursos.length).toBe(3);
    });
  });
});

