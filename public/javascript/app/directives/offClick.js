app.directive('tdOffClick', ['$document', '$parse', function ($document, $parse) {
  return {
    link: function link(scope, element, attrs) {
      $document.on("click", function (event) {
        if (event.target != element) {
          var expression = attrs.tdOffClick;
          scope.$eval(expression);
          scope.$apply();
        }
      });
    }
  };
}]);
