var arrayTypesGenerics = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Array Types and Generics</h1>
        <pre class="line-numbers language-typescript">
          <code class="language-typescript">
            let sizes: number[];
            sizes = [1, 2, 3];
          
            let toppings: Array<string>;
            toppings = ["tomato", "olive", "pineapple"];
          
            console.log("Array type number[]: " + sizes); // 1, 2, 3
          
            console.log("Generic Array<string>: " + toppings); // tomato, olive, pineapple       
          </code>
      </pre>`;
    window.printAndHighlightCode("arrayTypesGenerics");
  }
};

angular
  .module("special")
  .component("arrayTypesGenerics", arrayTypesGenerics)
  .config(function($stateProvider) {
    $stateProvider.state("special.arrayTypesGenerics", {
      url: "/arrayTypesGenerics",
      views: {
        "details@special": {
          component: "arrayTypesGenerics"
        }
      }
    });
  });
