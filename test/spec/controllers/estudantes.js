'use strict';

describe('Estudantes', function () {

  // load the controller's module
  beforeEach(module('internetsistemasApp'));

  var EstudantesCtrl,
    scope, location, timeout;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location, $timeout) {
    location = $location;
    timeout = $timeout;
    scope = $rootScope.$new();
    EstudantesCtrl = $controller('EstudantesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Deve conter nenhum estudante cadastrado enquanto não carrega a página', function () {
    expect(scope.estudantes.length).toBe(0);
  });

  it('Deve conter nenhum estudante selecionado', function () {
    expect(scope.estudante).toEqual({});
  });

  it('Não deve estar em modo de inserção', function () {
    expect(scope.editando).toBe(-1);
  });

  it('Deve salvar corretamente um novo estudante', function () {
    var estudante = {
      "nome": "Luiz Testinha",
      "sexo": "Feminino",
      "email": "abacate@gmail.com",
      "data_de_nascimento": "24/04/1995",
      "createdAt": "2016-07-15T18:25:43.511Z",
      "modifiedAt": "2016-07-15T18:25:43.511Z",
      "cursos": [
        {"nome": "AngularJS",
        "createdAt": "2016-07-15T18:25:43.511Z",
        "modifiedAt": "2016-07-15T18:25:43.511Z"}
      ]
    };

    timeout(function() {
      scope.salvar(estudante, false);

      expect(scope.estudantes.length).toBe(3);
    });
  });

  it('Deve recuperar o novo estudante corretamente', function () {
    var estudante = {
      "nome": "Luiz Testinha",
      "sexo": "Feminino",
      "email": "abacate@gmail.com",
      "data_de_nascimento": "24/04/1995",
      "createdAt": "2016-07-15T18:25:43.511Z",
      "modifiedAt": "2016-07-15T18:25:43.511Z",
      "cursos": [
        {"nome": "AngularJS",
        "createdAt": "2016-07-15T18:25:43.511Z",
        "modifiedAt": "2016-07-15T18:25:43.511Z"}
      ]
    };

    timeout(function() {
      scope.salvar(estudante, false);

      expect(scope.estudantes[2].nome).toEqual("Luiz Testinha");
    });
  });

  it('Deve excluir o novo estudante corretamente', function () {
    var estudante = {
      "nome": "Luiz Testinha",
      "sexo": "Feminino",
      "email": "abacate@gmail.com",
      "data_de_nascimento": "24/04/1995",
      "createdAt": "2016-07-15T18:25:43.511Z",
      "modifiedAt": "2016-07-15T18:25:43.511Z",
      "cursos": [
        {"nome": "AngularJS",
        "createdAt": "2016-07-15T18:25:43.511Z",
        "modifiedAt": "2016-07-15T18:25:43.511Z"}
      ]
    };

    timeout(function() {
      scope.salvar(estudante, false);

      var index = scope.estudantes.length;
      scope.excluir(index);

      expect(scope.estudantes.length).toBe(2);
    });
  });

  it('Deve entrar no modo de edição após clicar no botão de editar no novo estudante', function () {
    var estudante = {
      "nome": "Luiz Testinha",
      "sexo": "Feminino",
      "email": "abacate@gmail.com",
      "data_de_nascimento": "24/04/1995",
      "createdAt": "2016-07-15T18:25:43.511Z",
      "modifiedAt": "2016-07-15T18:25:43.511Z",
      "cursos": [
        {"nome": "AngularJS",
        "createdAt": "2016-07-15T18:25:43.511Z",
        "modifiedAt": "2016-07-15T18:25:43.511Z"}
      ]
    };

    timeout(function() {
      scope.salvar(estudante, false);

      var index = scope.estudantes.length;
      expect(scope.estudantes[index].nome).toEqual("Luiz Testinha");

      scope.editar(index);

      expect(scope.editando).toBe(index);

    });
  });

  it('Deve editar o novo estudante corretamente', function () {
    var estudante = {
      "nome": "Luiz Testinha",
      "sexo": "Feminino",
      "email": "abacate@gmail.com",
      "data_de_nascimento": "24/04/1995",
      "createdAt": "2016-07-15T18:25:43.511Z",
      "modifiedAt": "2016-07-15T18:25:43.511Z",
      "cursos": [
        {"nome": "AngularJS",
        "createdAt": "2016-07-15T18:25:43.511Z",
        "modifiedAt": "2016-07-15T18:25:43.511Z"}
      ]
    };

    timeout(function() {
      scope.salvar(estudante, false);

      var index = scope.estudantes.length;
      expect(scope.estudantes[index].nome).toEqual("Luiz Testinha");

      scope.editar(index);

      estudante.nome = "Abacate333";

      scope.salvar(estudante, null);

      expect(scope.estudantes[index].nome).toEqual("Abacate333");
    });
  });

  it('Deve conter os 2 estudantes cadastrados na mão depois de carregar a página', function () {
    timeout(function() {
      expect(scope.estudantes.length).toBe(2);
    });
  });
});

