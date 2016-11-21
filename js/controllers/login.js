angular.module('inspinia').controller('LoginCtrl', function($scope, $state){
      $scope.login = function(){
        $state.go('index.dashboard');
      }
    });
