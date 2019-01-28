var interfaceWithFunctionTypes = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Interfaces with Function Types</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
				  interface Pizza {
                    name: string;
                    sizes: string[];
                    getAvailableSizes(): string[];
                  }
                
                  let pizza: Pizza;
                
                  function createPizza(name: string, sizes: string[]): Pizza {
                    const pizza: Pizza = {
                        name,
                        sizes,
                        getAvailableSizes() {
                          return this.sizes;
                        }
                      };
                
                    return pizza;
                  }
                
                  pizza = createPizza("Pineapple", ["large", "medium"]);
                  console.log(pizza); // {getAvailableSizes: ƒ (), name: "Pineapple", sizes: (2) ["large", "medium"]}
				</code>
			</pre>`;
    window.printAndHighlightCode("interfaceWithFunctionTypes");
  }
};

angular
  .module("interfaces")
  .component("interfaceWithFunctionTypes", interfaceWithFunctionTypes)
  .config(function($stateProvider) {
    $stateProvider.state("interfaces.interfaceWithFunctionTypes", {
      url: "/interfaceWithFunctionTypes",
      views: {
        "details@interfaces": {
          component: "interfaceWithFunctionTypes"
        }
      }
    });
  });
