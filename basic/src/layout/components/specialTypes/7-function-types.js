var functionTypes = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Function Types</h1>
            <pre class="line-numbers language-typescript">
      				<code class="language-typescript">
                let sumOrder: Function;

                sumOrder = (price: number, quantity: number): number => {
                  return price * quantity;
                };
              
                let sum = sumOrder(25, 2);
              
                console.log("Total sum: " + sum); // 50
              
                let total: (price: number, quantity: number) => number;
              
                total = (x, y) => x * y;
              
                console.log("Total: " + total(30, 5)); // 150
              </code>
          </pre>`;
    window.printAndHighlightCode("functionTypes");
  }
};

angular
  .module("special")
  .component("functionTypes", functionTypes)
  .config(function($stateProvider) {
    $stateProvider.state("special.functionTypes", {
      url: "/functionTypes",
      views: {
        "details@special": {
          component: "functionTypes"
        }
      }
    });
  });
