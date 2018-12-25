var interfaceWithFunctionTypes = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope, $window) {
    $scope.myTemplate = `<h1>Interfaces with Function Types</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
				        </code>
			      </pre>`;
    window.printAndHighlightCode("interfaceWithFunctionTypes");
  }
};

angular
  .module("interfaces")
  .component("interfaceWithFunctionTypes", interfaceWithFunctionTypes)
  .config(function($stateProvider) {
    $stateProvider.state("interfaces.interfaceWithFunctionTypes", {
      url: "/interfaceWithFunctionTypes",
      views: {
        "details@interfaces": {
          component: "interfaceWithFunctionTypes"
        }
      }
    });
  });
