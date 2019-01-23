var staticProperties = {
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
  .component("staticProperties", staticProperties)
  .config(function($stateProvider) {
    $stateProvider.state("classes.staticProperties", {
      url: "/staticProperties",
      views: {
        "details@classes": {
          component: "staticProperties"
        }
      }
    });
  });
