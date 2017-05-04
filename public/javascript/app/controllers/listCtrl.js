app.controller('ListCtrl', ['$scope', '$firebaseAuth', '$firebaseArray', 'AuthService', 'currentAuth', '$location', function($scope, $firebaseAuth, $firebaseArray, AuthService, currentAuth, $location) {
  $scope.auth = AuthService;
  $scope.uid = currentAuth.uid;
  var ref = firebase.database().ref().child("users").child($scope.uid).child("listItems");
  $scope.listItems = $firebaseArray(ref);

  $scope.addNewItem = function () {
    $scope.listItems.$add({
      text: '',
      checked: false
    }).then(function (ref) {
      document.getElementById(ref.key).focus();
    });
  };

  $scope.updateItem = function (listItem) {
    $scope.listItems.$save(listItem);
  };

  $scope.deleteItem = function (listItem) {
    $scope.listItems.$remove(listItem);
  };

  $scope.checkItem = function (listItem) {
    listItem.checked = true;
    $scope.listItems.$save(listItem);
  };

  $scope.uncheckItem = function (listItem) {
    listItem.checked = false;
    $scope.listItems.$save(listItem);
  };

  $scope.auth.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser == null) {
      $location.path("/signin");
    }
  });
}]);
