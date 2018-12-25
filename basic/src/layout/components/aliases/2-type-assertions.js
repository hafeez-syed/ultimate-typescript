var typeAssertions = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope, $window) {
    $scope.myTemplate = `<h1>Type Assertions</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">

				</code>
			</pre>`;
    window.printAndHighlightCode("typeAliases");
  }
};

angular
  .module("aliases")
  .component("typeAssertions", typeAssertions)
  .config(function($stateProvider) {
    $stateProvider.state("aliases.typeAssertions", {
      url: "/typeAssertions",
      views: {
        "details@aliases": {
          component: "typeAssertions"
        }
      }
    });
  });
