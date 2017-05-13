app.directive('tdOffClick', ['$document', '$parse', function ($document, $parse) {
  return {
    link: function link(scope, element, attrs) {
      element.on("click", function(event) {
        event.stopPropagation();
        event.preventDefault();

        var expression = attrs.tdOnClick;
        scope.$eval(expression);
        scope.$apply();
      });

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
