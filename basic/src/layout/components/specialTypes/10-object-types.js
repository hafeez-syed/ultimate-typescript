var objectTypes = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Object Types</h1>
        <pre class="line-numbers language-typescript">
          <code class="language-typescript">
            let pizza: { name: string; price: number; getName(): string } = {
              name: "Hawaiian Pizza",
              price: 15,
              getName() {
                return pizza.name;
              }
            };
          
            console.log(pizza.getName()); // Hawaiian Pizza
          </code>
      </pre>`;
    window.printAndHighlightCode("objectTypes");
  }
};

angular
  .module("special")
  .component("objectTypes", objectTypes)
  .config(function($stateProvider) {
    $stateProvider.state("special.objectTypes", {
      url: "/objectTypes",
      views: {
        "details@special": {
          component: "objectTypes"
        }
      }
    });
  });
