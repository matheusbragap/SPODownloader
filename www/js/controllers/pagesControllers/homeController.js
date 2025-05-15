app.controller('homeController', function($scope, $interval) {
    $scope.placeholders = [
    'https://open.spotify.com/track/...',
    'https://open.spotify.com/album/...'
  ];
  $scope.currentPlaceholder = $scope.placeholders[0];
  $scope.placeholderIndex = 0;


  $interval(function() {
    $scope.placeholderIndex = ($scope.placeholderIndex + 1) % $scope.placeholders.length;
    $scope.currentPlaceholder = $scope.placeholders[$scope.placeholderIndex];
  }, 3000)
});