var constructor = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope, $window) {
    $scope.myTemplate = `<h1>Understanding Classes and Constructor</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">

				</code>
			</pre>`;
    window.printAndHighlightCode("classesConstructor");
  }
};

angular
  .module("classes")
  .component("constructor", constructor)
  .config(function($stateProvider) {
    $stateProvider.state("classes.constructor", {
      url: "/constructor",
      views: {
        "details@classes": {
          component: "constructor"
        }
      }
    });
  });
