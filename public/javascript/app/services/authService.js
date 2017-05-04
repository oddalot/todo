app.factory("AuthService", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
