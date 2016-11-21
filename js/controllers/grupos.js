angular.module('inspinia').controller('GruposCtrl', function($scope, $state) {
  $scope.estudiantes = [
    {nombre:'Laura', apellidos:'Escobar Marin', universidad:'Universidad de Antioquia', semestre:7},
    {nombre:'Christian', apellidos:'Reyes Toro', universidad:'Eafit', semestre:6},
    {nombre:'Manuel Mauricio', apellidos:'Murillo Echavarria', universidad:'Universidad de Medellin', semestre:8},
    {nombre:'Paola', apellidos:'Duarte Monsalve', universidad:'Eafit', semestre:7},
    {nombre:'Daniela', apellidos:'Aristizabal Palacios', universidad:'Universidad de Antioquia', semestre:6},
    {nombre:'Carlos', apellidos:'Marin Cadavid', universidad:'Universidad de Medellin', semestre:9}
  ]
  $scope.cancel = function(){
    $state.go('index.dashboard');
  }
  $scope.save = function(){
    $state.go('index.dashboard');
  }
});
