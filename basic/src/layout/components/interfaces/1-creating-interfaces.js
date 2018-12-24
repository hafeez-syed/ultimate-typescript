var creating = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope, $window) {
    $scope.myTemplate = `<h1>Creating Interfaces</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">

				</code>
			</pre>`;
    window.printAndHighlightCode("creatingInterfaces");
  }
};

angular
  .module("interfaces")
  .component("creating", creating)
  .config(function($stateProvider) {
    $stateProvider.state("interfaces.creating", {
      url: "/creating",
      views: {
        "details@interfaces": {
          component: "creating"
        }
      }
    });
  });
