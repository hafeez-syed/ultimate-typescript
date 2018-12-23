var tupleTypesForArrays = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Tuple Types for Arrays</h1>
        <pre class="line-numbers language-typescript">
          <code class="language-typescript">
          let pizza: [string, number, boolean];

          pizza = ["Pepperoni", 20, true];
        
          // exact data type order as defined in tuple type i.e [string, number, boolean]
          console.log(pizza); // ["Pepperoni", 20, true]
          </code>
      </pre>`;
    window.printAndHighlightCode("tupleTypesForArrays");
  }
};

angular
  .module("special")
  .component("tupleTypesForArrays", tupleTypesForArrays)
  .config(function($stateProvider) {
    $stateProvider.state("special.tupleTypesForArrays", {
      url: "/tupleTypesForArrays",
      views: {
        "details@special": {
          component: "tupleTypesForArrays"
        }
      }
    });
  });
