var extendingInterfaces = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Extending Interfaces</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  interface Sizes {
                      sizes: string[];
                  }
              
                  interface Pizza extends Sizes {
                      name: string;
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
    window.printAndHighlightCode("extendingInterfaces");
  }
};

angular
  .module("interfaces")
  .component("extendingInterfaces", extendingInterfaces)
  .config(function($stateProvider) {
    $stateProvider.state("interfaces.extendingInterfaces", {
      url: "/extendingInterfaces",
      views: {
        "details@interfaces": {
          component: "extendingInterfaces"
        }
      }
    });
  });
