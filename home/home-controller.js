angular.module('app').controller('HomeController', HomeController);
HomeController.$inject = ['$location', 'CursoService'];

function HomeController($location, CursoService) {
    vm = this;
    vm.teste = 'Home';
    vm.clientes = '';
    vm.erro = false;

    vm.init = function () {
        vm.listarClientes();
    }

    vm.navegar = function (rota, id) {
        $location.path(rota + '/' + id);
    }

    vm.listarClientes = function () {
        CursoService.exec_GET().then((resposta) => {
            if (resposta) {
                vm.clientes = resposta;
            } else {
                alert("[ERROR]");
                console.error(new Error('Conexão com banco de dados falhou'));
                vm.erro = true;
            }
        })
    }

    vm.excluir = function (id) {
        CursoService.exec_DEL(id).then((resposta) => {
            if (resposta) {
                // Mensagem Resposta
            }
        })
    }

    vm.editar = function (id) {
        vm.navegar('Cadastro', id);
    }

    vm.orderByMe = function(cliente) {
        vm.myOrderBy = cliente;
    }

}