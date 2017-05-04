app.controller('ListCtrl', ['$scope', '$firebaseAuth', '$firebaseArray', function($scope, $firebaseAuth, $firebaseArray) {
  var ref = firebase.database().ref().child("listItems");
  $scope.listItems = $firebaseArray(ref);

  $scope.addNewItem = function () {
    $scope.listItems.$add({
      text: '',
      checked: false
    }).then(function (ref) {
      document.getElementById(ref.key).focus();
    });
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
}]);
