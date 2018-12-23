var typedFunctions = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Typed Function and Default Params</h1>
        <pre class="line-numbers language-typescript">
          <code class="language-typescript">
            let total: (price: number, quantity?: number) => number;

            total = (x, y = 1) => x * y;

            let sum = total(25);

            console.log("Total of 1 supplied argument with default value: " + sum); // 25

            sum = total(25, 2);

            console.log("Total of both supplied arguments without default value: " + sum); // 50
          </code>
      </pre>`;
    window.printAndHighlightCode("typedFunctions");
  }
};

angular
  .module("special")
  .component("typedFunctions", typedFunctions)
  .config(function($stateProvider) {
    $stateProvider.state("special.typedFunctions", {
      url: "/typedFunctions",
      views: {
        "details@special": {
          component: "typedFunctions"
        }
      }
    });
  });
