var typeAssertions = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Type Assertions</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  type Pizza = { name: string; toppings: number };

                  const pizza: Pizza = { name: "Blazing Inferno", toppings: 5 };
                
                  const serialzed = JSON.stringify(pizza);
                
                  function getNameFromJSONOldWay(obj: string): string {
                    return (<Pizza>JSON.parse(obj)).name;
                  }
                
                  function getNameFromJSONNewWay(obj: string): string {
                    return (JSON.parse(obj) as Pizza).name;
                  }
                
                  console.log("OLD WAY: (<Type>object): " + getNameFromJSONOldWay(serialzed)); // Blazing Inferno
                
                  console.log("NEW WAY: (object as Type) " + getNameFromJSONNewWay(serialzed)); // Blazing Inferno
              
                </code>
            </pre>`;
    window.printAndHighlightCode("typeAssertions");
  }
};

angular
  .module("aliases")
  .component("typeAssertions", typeAssertions)
  .config(function($stateProvider) {
    $stateProvider.state("aliases.typeAssertions", {
      url: "/typeAssertions",
      views: {
        "details@aliases": {
          component: "typeAssertions"
        }
      }
    });
  });
