var contractsAndImplements = {
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
  .component("contractsAndImplements", contractsAndImplements)
  .config(function($stateProvider) {
    $stateProvider.state("classes.contractsAndImplements", {
      url: "/contractsAndImplements",
      views: {
        "details@classes": {
          component: "contractsAndImplements"
        }
      }
    });
  });
