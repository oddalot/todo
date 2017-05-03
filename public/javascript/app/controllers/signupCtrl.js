app.controller('SignupCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {
  $scope.authObj = $firebaseAuth();
  $scope.userValues = {};
}]);
