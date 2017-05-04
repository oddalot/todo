app.controller('SignupCtrl', ['$scope', '$firebaseAuth', '$location', '$firebaseStorage', function($scope, $firebaseAuth, $location, $firebaseStorage) {
  $scope.authObj = $firebaseAuth();
  $scope.userValues = {};

  $scope.createAccount = function () {
    $scope.authObj.$createUserWithEmailAndPassword($scope.userValues.email, $scope.userValues.password)
    .then(function(firebaseUser) {
      if (firebaseUser) {
        var storageRef = firebase.storage().ref(firebaseUser.uid);
        $scope.storage = $firebaseStorage(storageRef);
        var f = document.getElementById('file').files[0];
        if (f != null) {
          $scope.storage.$put(f)
        }
        $location.path('/list');
      }
    }).catch(function(error) {
      console.error("Error: ", error);
    });
  };

  $scope.getUserImage = function () {
    console.log(1);
    document.getElementById('file').click();
  };
}]);
