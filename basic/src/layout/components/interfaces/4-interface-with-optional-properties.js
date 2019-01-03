var interfaceOptionalProperties = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope, $window) {
    $scope.myTemplate = `<h1>Interface with Optional Properties (property?: value) </h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  interface Sizes {
                      sizes: string[];
                  }
              
                  interface Pizza extends Sizes {
                      name: string;
                      toppings?: number;
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
                  pizza.toppings = 2

                  console.log(pizza); // {getAvailableSizes: ƒ (), name: "Pineapple", sizes: (2) ["large", "medium"], toppings:  2}
				</code>
			</pre>`;
    window.printAndHighlightCode("interfaceOptionalProperties");
  }
};

angular
  .module("interfaces")
  .component("interfaceOptionalProperties", interfaceOptionalProperties)
  .config(function($stateProvider) {
    $stateProvider.state("interfaces.optionalProperties", {
      url: "/optionalProperties",
      views: {
        "details@interfaces": {
          component: "interfaceOptionalProperties"
        }
      }
    });
  });
