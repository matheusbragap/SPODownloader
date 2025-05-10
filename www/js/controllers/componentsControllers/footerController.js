angular.module('spoApp').controller('footerController', ['$scope', '$location', 
function($scope, $location) {

  // função de navegação
  $scope.goToPage = function(page) {
    $location.path(page);  // navega para o path especificado
  };
  
}]);