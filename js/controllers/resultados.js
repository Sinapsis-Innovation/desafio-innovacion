angular.module('inspinia').controller('ResultadosCtrl', function($scope, $state) {
  $scope.resultados = [
    {grupo:'Grupo los delfines', etapa:3, porcentaje:'70%', estado:"Proceso"},
    {grupo:'Los innovadores', etapa:2, porcentaje:'65%', estado:"Proceso"},
    {grupo:'Los imparables', etapa:4, porcentaje:'90%', estado:"Proceso"},
    {grupo:'Tarantulas', etapa:5, porcentaje:'100%', estado:"Finalizado"},
    {grupo:'Siempre alerta', etapa:5, porcentaje:'100%', estado:"Finalizado"},
    {grupo:'Grupo Innovarte', etapa:5, porcentaje:'100%', estado:"Finalizado"},
    {grupo:'Innovacción ', etapa:4, porcentaje:'90%', estado:"Proceso"},
    {grupo:'Mentes al frente', etapa:3, porcentaje:'70%', estado:"Proceso"}
  ]
});
