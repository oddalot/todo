app.controller('SigninCtrl', ['$scope', '$firebaseAuth', '$location', 'currentAuth', function($scope, $firebaseAuth, $location, currentAuth) {
  $scope.authObj = $firebaseAuth();
  $scope.userValues = {};
  $scope.userValues.email = undefined
  $scope.userValues.password = undefined

  if (currentAuth) {
    $location.path('/list');
  }

  $scope.signIn = function () {
    if ($scope.userValues.email && $scope.userValues.password) {
      $scope.authObj.$signInWithEmailAndPassword($scope.userValues.email, $scope.userValues.password).then(function(firebaseUser) {
        if (firebaseUser) {
          $location.path('/list');
        }
      }).catch(function(error) {
        console.log("error", error);
      });
    }
  };
}]);
