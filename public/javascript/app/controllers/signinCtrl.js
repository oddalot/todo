app.controller('SigninCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {
  $scope.authObj = $firebaseAuth();
  $scope.userValues = {};
  $scope.userValues.email = undefined
  $scope.userValues.password = undefined

  $scope.signIn = function () {
    if ($scope.userValues.email && $scope.userValues.password) {
      $scope.authObj.$signInWithEmailAndPassword($scope.userValues.email, $scope.userValues.password).then(function(firebaseUser) {
        console.log("user", firebaseUser);
      }).catch(function(error) {
        console.log("error", error);
      });
    }
  };
}]);
