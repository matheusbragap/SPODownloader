angular.module('spoApp').controller('footerController', ['$scope', '$location', 
function($scope, $location) {
  
  // da a page atual
  $scope.currentPage = $location.path();
  
  // Função de navegação
  $scope.goToPage = function(page) {
    $location.path(page);
  };
  
}]);