/**
 * 
 */

var appClientes = angular.module('clientes',['ngRoute']);

appClientes.service('clientesService',function($http){
	this.listaClientes = function(){
		return $http({
			url: 'http://localhost:8081/ejemploJersey/sonorks/cliente',
			method: 'GET'
		});
	}
});

appClientes.service('guardarCliente', function($http){
	this.guardarCliente = function(cliente){
		return $http({
			url: 'http://localhost:8081/ejemploJersey/sonorks/cliente',
			method: 'POST',
			params: {
				cedula: cliente.cedula, 
				nombres: cliente.nombre,
				apellidos: cliente.apellidos,
				email: cliente.email,
				usuarioCrea: "sonorks"
			}
		});
	}
});
appClientes.service('loginService', function($http){
	this.logear = function(usuario, contrasena){
		return $http({
			url: 'http://localhost:8081/ejemploJersey/sonorks/usuario',
			method: 'GET',
			params: {
				login: usuario, 
				pws: contrasena,
			}
		});
	}
});

appClientes.controller('listaClientes', function($scope, $location,clientesService){
	clientesService.listaClientes().then(
			function success(data){
				$scope.listaClientes = data.data.clienteJersey;
			}
			);
	$scope.agregar = function(){
		$location.url('/nuevo');
	}
});

appClientes.controller("cliente", function($scope, $location, guardarCliente){
	$scope.cliente = {
			cedula: '',
			nombre: '',
			apellidos: '',
			email: '' 
	};
	$scope.guardar = function(){
		guardarCliente.guardarCliente($scope.cliente).then(
				function success(data){
					alert('Cliente creado');
					$location.url('/listaClientes');
				});
	}
});

appClientes.controller("login", function($scope, $location, loginService){
	$scope.usuario = '';
	$scope.contrasena = '';
	$scope.logear = function(){
		loginService.logear($scope.usuario, $scope.contrasena).then(
				function success(data){
					alert('Logeado satisfactoriamente');
					$location.url('/listaClientes');
				});
	}
})

appClientes.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/listaClientes',{
		templateUrl: 'vistaCliente.html',
		controller: 'listaClientes'
	})
	$routeProvider.when('/nuevo',{
		templateUrl: 'cliente.html',
		controller: 'cliente'
	})
	$routeProvider.when('/',{
		templateUrl: 'login.html',
		controller: 'login'
	})
}])