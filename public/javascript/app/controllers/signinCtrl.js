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

  $scope.sendPasswordReset = function () {
    if ($scope.userValues.email != null && $scope.userValues.email != '') {
      $scope.authObj.$sendPasswordResetEmail($scope.userValues.email).then(function() {
        console.log("Password reset email sent successfully!");
        $scope.showTooltip = false;
      }).catch(function(error) {
        console.error("Error: ", error);
      });
    }
  };
}]);
