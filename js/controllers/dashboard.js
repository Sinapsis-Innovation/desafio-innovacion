angular.module('inspinia').controller('DashboardCtrl', function($scope, $state) {
  $scope.retos = [
    {nombre: 'Software: Desafio innovacion', estado:'En Proceso', empresa:'Ruta N'},
    {nombre: 'Alimento: Uso de la cascara del huevo', estado:'En Proceso', empresa:'Avinal S.A.'},
    {nombre: 'Software: experiencia digital  para clientes.', estado:'En Proceso', empresa:'Protección, pensiones y cesantías.'},
    {nombre: 'Producto: Centro de experiencias autosura.', estado:'Finalizado', empresa:'Sura'},
    {nombre: 'Producto: Envase para muestras de laboratorio', estado:'Finalizado', empresa:'Laboratorio Echavarria'},
    {nombre: 'Energia: Medición de eficiancia de energía rápida', estado:'Finalizado', empresa:'Indisa S.A.'}
  ]
  $scope.estudiantes = [
    {nombre:'Laura', apellidos:'Escobar Marin', universidad:'Universidad de Antioquia', semestre:7},
    {nombre:'Christian', apellidos:'Reyes Toro', universidad:'Eafit', semestre:6},
    {nombre:'Manuel Mauricio', apellidos:'Murillo Echavarria', universidad:'Universidad de Medellin', semestre:8},
    {nombre:'Paola', apellidos:'Duarte Monsalve', universidad:'Eafit', semestre:7},
    {nombre:'Daniela', apellidos:'Aristizabal Palacios', universidad:'Universidad de Antioquia', semestre:6},
    {nombre:'Carlos', apellidos:'Marin Cadavid', universidad:'Universidad de Medellin', semestre:9}
  ]
  console.log('pasó por acá');
});
