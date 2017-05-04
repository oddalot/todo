// Initialize Firebase
var config = {
  apiKey: "AIzaSyDzTQHgv0NdXrXEZse-Df5-eL502ABn3_A",
  authDomain: "to-do-e2898.firebaseapp.com",
  databaseURL: "https://to-do-e2898.firebaseio.com",
  projectId: "to-do-e2898",
  storageBucket: "to-do-e2898.appspot.com",
  messagingSenderId: "565401506260"
};
firebase.initializeApp(config);

// Initialize the angular app
var app = angular.module('todoApp', ["ngRoute", "ngAnimate", "firebase"]);

app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    if (error === "AUTH_REQUIRED") {
      $location.path("/signin");
    }
  });
}]);

// routing
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "/javascript/app/templates/signin.html",
      controller: "SigninCtrl",
      resolve: {
        "currentAuth": ["AuthService", function(AuthService) {
          return AuthService.$waitForSignIn();
        }]
      }
    })
    .when("/signin", {
      templateUrl: "/javascript/app/templates/signin.html",
      controller: "SigninCtrl",
      resolve: {
        "currentAuth": ["AuthService", function(AuthService) {
          return AuthService.$waitForSignIn();
        }]
      }
    })
    .when("/signup", {
      templateUrl: "/javascript/app/templates/signup.html",
      controller: "SignupCtrl"
    })
    .when("/list", {
      templateUrl: "/javascript/app/templates/list.html",
      controller: "ListCtrl",
      resolve: {
        "currentAuth": ["AuthService", function(AuthService) {
          return AuthService.$requireSignIn();
        }]
      }
    });

    $locationProvider.html5Mode(true);
}]);
