/**
 * 
 */

var modulo = angular.module('miModulo', []); //sin el segundo parametro se llama un modulo existente

modulo.controller('miControlador', ['$scope',function($scope){
	$scope.lista = [{
		texto: 'Prueba 1',
		seleccionado: true
	},
	{
		texto: 'Prueba 2',
		seleccionado: false
	}]
	$scope.texto="";
	$scope.agregarObjeto = function(){
		if($scope.texto != ""){
			console.log($scope.texto);
			$scope.lista.push({texto: $scope.texto, seleccionado:false});
			console.log($scope.lista);
			$scope.texto = "";
		}
		else{
			alert("Debe digitar el texto");
			return;
		}
	}
	$scope.eliminarObjeto = function(){
		var lista = $scope.lista;
		$scope.lista = [];
		
		angular.forEach(lista, function(objeto){
			if(!objeto.seleccionado){
				$scope.lista.push(objeto); //investigar como borrar un objeto de la lista
			}
		});
	}
}]);