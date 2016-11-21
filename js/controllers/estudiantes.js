angular.module('inspinia').controller('EstudiantesCtrl', function($scope, $state) {
  $scope.estudiantes = [
    {nombre:'Gustavo', apellidos:'Londoño', semestre:8, universidad:'Universidad  de Medellin', carrera:'Ingenieria de sistemas', telefono:'4967627', correo:'tavon321@gmail.com', rango:100},
    {nombre:'Virgilio Daniel', apellidos:'Osorio Yepes', semestre:8, universidad:'Universidad  de Medellin', carrera:'Negocios Internacionales', telefono:'3053041435', correo:'voy914@hotmail.com', rango:100},
    {nombre:'Fernando', apellidos:'Alzate Pineda', semestre:7, universidad:'Eafit', carrera:'Ingenieria de procesos', telefono:'3554322', correo:'Ferchoalpi@gmail.com', rango:99},
    {nombre:'Paula Patricia', apellidos:'Moncada Marin', semestre:8, universidad:'Universidad de Antioquia', carrera:'Ingenieria de sistemas', telefono:'4345344', correo:'ppmoncamari@hotmail.com', rango:98},
    {nombre:'Hernan Camilo', apellidos:'Buitrago Solis', semestre:7, universidad:'Eafit', carrera:'Negocios Internacionales', telefono:'2228567', correo:'Hercabuitrago@eafith.edu.co', rango:90},
    {nombre:'Pedro Emilio', apellidos:'Garcia Estrada', semestre:9, universidad:'Universidad de Antioquia', carrera:'Ingeniaria Civil', telefono:'3007658890', correo:'Pemiliogestrada@yahoo.com', rango:88},
    {nombre:'Mateo', apellidos:'Marin Toro', semestre:6, universidad:'Eafit', carrera:'Ingenieria de sistemas', telefono:'3124456790', correo:'Mateotoro21@eafith.edu.co', rango:80},
    {nombre:'Eduardo', apellidos:'Montes Uribe', semestre:9, universidad:'Universidad  de Medellin', carrera:'Ingenieria de sistemas', telefono:'3005679210', correo:'Edumontes930@hotmail.com', rango:79}
  ]
});
