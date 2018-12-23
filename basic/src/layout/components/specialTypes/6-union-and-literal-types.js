var unionAndLiteralTypes = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Union and Literal Types</h1>
            <pre class="line-numbers language-typescript">
				<code class="language-typescript">
					let pizzaSize: string | number = "small";

					function selectSize(size: 12 | "small" | "medium" | "large"): void {
					  pizzaSize = size;
					}

					console.log("Pizza size: " + pizzaSize); // small
				  
					selectSize("large");
				  
					console.log("Pizza size: " + pizzaSize); // large
				  
					selectSize(12);
				  
					console.log("Pizza size: " + pizzaSize); // 12
				</code>
			</pre>`;
    window.printAndHighlightCode("unionLiteralTypes");
  }
};

angular
  .module("special")
  .component("unionAndLiteralTypes", unionAndLiteralTypes)
  .config(function($stateProvider) {
    $stateProvider.state("special.unionAndLiteralTypes", {
      url: "/unionAndLiteralTypes",
      views: {
        "details@special": {
          component: "unionAndLiteralTypes"
        }
      }
    });
  });
