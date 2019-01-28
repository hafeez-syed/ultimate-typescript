var typeAliases = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Type Aliases</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  type Size = "small" | "medium" | "large";
                  type Callback = (size: Size) => void;
                
                  let pizzaSize: string = "small";
                
                  const selectSize: Callback = x => {
                    pizzaSize = x;
                  };
                
                  selectSize("medium");

                  console.log("PizzaSize " + pizzaSize); // medium
              </code>
            </pre>`;
    window.printAndHighlightCode("typeAliases");
  }
};

angular
  .module("aliases")
  .component("typeAliases", typeAliases)
  .config(function($stateProvider) {
    $stateProvider.state("aliases.typeAliases", {
      url: "/typeAliases",
      views: {
        "details@aliases": {
          component: "typeAliases"
        }
      }
    });
  });
