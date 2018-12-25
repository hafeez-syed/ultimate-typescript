var creatingInterfaces = {
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
  .component("creatingInterfaces", creatingInterfaces)
  .config(function($stateProvider) {
    $stateProvider.state("interfaces.creatingInterfaces", {
      url: "/creatingInterfaces",
      views: {
        "details@interfaces": {
          component: "creatingInterfaces"
        }
      }
    });
  });
