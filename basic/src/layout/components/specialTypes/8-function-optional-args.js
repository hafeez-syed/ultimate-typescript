var optionalArgs = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Function and Optional Arguments</h1>
            <pre class="line-numbers language-typescript">
              <code class="language-typescript">
                let total: (price: number, quantity?: number) => number;

                total = (x, y) => {
                  if (y) {
                    return x * y;
                  }

                  return x;
                };

                let sum = total(25);

                console.log("Total of 1 arg supplied: " + sum); // 25

                sum = total(25, 2);

                console.log("Total of both args supplied: " + sum); // 50
              </code>
          </pre>`;
    window.printAndHighlightCode("optionalArguments");
  }
};

angular
  .module("special")
  .component("optionalArgs", optionalArgs)
  .config(function($stateProvider) {
    $stateProvider.state("special.optionalArgs", {
      url: "/optionalArgs",
      views: {
        "details@special": {
          component: "optionalArgs"
        }
      }
    });
  });
