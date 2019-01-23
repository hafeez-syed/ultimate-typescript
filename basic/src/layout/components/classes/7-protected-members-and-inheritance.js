var protectedMembers = {
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
  .component("protectedMembers", protectedMembers)
  .config(function($stateProvider) {
    $stateProvider.state("classes.protectedMembers", {
      url: "/protectedMembers",
      views: {
        "details@classes": {
          component: "protectedMembers"
        }
      }
    });
  });
