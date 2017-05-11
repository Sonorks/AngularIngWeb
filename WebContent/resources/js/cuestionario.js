/**
 * @Author Julian Vasquez Giraldo - julivas96@gmail.com
 * @Version 1.0
 */

var cuestionario = angular.module('modCuestionario',[]);

cuestionario.controller('contCuestionario', function($scope){
	$scope.respuestasCorrectas = 0;
	$scope.estadoUsuario = '';
	$scope.preguntas = [{
		id: 1,
		texto: 'Pregunta 1',
		respuestaValida: 1,
		respuesta: null,
		estado: '',
		respuestas : [{
			id: 1, texto: 'Respuesta 1.1'
		},
		{
			id: 2, texto: 'Respuesta 1.2'
		},
		{
			id: 3, texto: 'Respuesta 1.3'
		},
		{
			id: 4, texto: 'Respuesta 1.4'
		}]
	},
	{
		id: 2,
		texto: 'Pregunta 2',
		respuestaValida: 1,
		respuesta: null,
		estado: '',
		respuestas : [{
			id: 1, texto: 'Respuesta 2.1'
		},
		{
			id: 2, texto: 'Respuesta 2.2'
		},
		{
			id: 3, texto: 'Respuesta 2.3'
		},
		{
			id: 4, texto: 'Respuesta 2.4'
		}]
	},
	{
		id: 3,
		texto: 'Pregunta 3',
		respuestaValida: 1,
		respuesta: null,
		estado: '',
		respuestas : [{
			id: 1, texto: 'Respuesta 3.1'
		},
		{
			id: 2, texto: 'Respuesta 3.2'
		},
		{
			id: 3, texto: 'Respuesta 3.3'
		},
		{
			id: 4, texto: 'Respuesta 3.4'
		}]
	}];
	$scope.validar = function(pregunta) {
		if(pregunta.respuestaValida == pregunta.respuesta){
			$scope.respuestasCorrectas++;
			pregunta.estado= 'ok';
		}
		else{
			if(pregunta.estado === 'ok' && $scope.respuestasCorrectas > 0){
				$scope.respuestasCorrectas--;
			}
			pregunta.estado = 'error'
		}
		estadoUsuario();
	}
	function estadoUsuario(){
		var total = $scope.respuestasCorrectas/$scope.preguntas;
		if (total === 0){
			$scope.estadoUsuario = 'looser';
		}
		else if(total === 1){
			$scope.estadoUsuario = 'guru';
		}
		else{
			$scope.estadoUsuario = 'poor';
		}
	}
});
