app.controller('SignupCtrl', ['$scope', '$firebaseAuth', '$location', '$firebaseStorage', function($scope, $firebaseAuth, $location, $firebaseStorage) {
  $scope.authObj = $firebaseAuth();
  $scope.userValues = {};
  $scope.imagePreview = false;

  $scope.createAccount = function () {
    $scope.authObj.$createUserWithEmailAndPassword($scope.userValues.email, $scope.userValues.password)
    .then(function(firebaseUser) {
      if (firebaseUser) {
        var storageRef = firebase.storage().ref("images").child(firebaseUser.uid).child("userImage");
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
    document.getElementById('file').click();
  };

  $scope.loadFile = function(element) {
    if (element && element != undefined) {
      var output = document.getElementById('image-preview');
      output.src = URL.createObjectURL(element.files[0]);
      $scope.imagePreview = true;
      $scope.$apply();
    } else {
      $scope.imagePreview = false;
      $scope.$apply();
    }
  };
}]);
