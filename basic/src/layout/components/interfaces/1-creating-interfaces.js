var creatingInterfaces = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope, $window) {
    $scope.myTemplate = `<h1>Creating Interfaces</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  interface Pizza {
                    name: string;
                    sizes: string[];
                  }
                
                  let pizza: Pizza[];
                
                  function createPizza(name: string, sizes: string[]): Pizza[] {
                    const pizzas: Pizza[] = [
                      {
                        name,
                        sizes
                      }
                    ];
                
                    return pizzas;
                  }
                
                  pizza = createPizza("Pepperoni", ["small", "medium"]);
                
                  console.log('pizza: ' + pizza); // pizza: [{"name":"Pepperoni","sizes":["small","medium"]}]
				</code>
			</pre>`;
    window.printAndHighlightCode("creatingInterfaces");
  }
};

angular
  .module("interfaces")
  .component("creatingInterfaces", creatingInterfaces)
  .config(function($stateProvider) {
    $stateProvider.state("interfaces.creatingInterfaces", {
      url: "/creatingInterfaces",
      views: {
        "details@interfaces": {
          component: "creatingInterfaces"
        }
      }
    });
  });
