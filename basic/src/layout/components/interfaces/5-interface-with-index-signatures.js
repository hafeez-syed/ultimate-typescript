var indexSignatures = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Interface with Index Signatures </h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  interface Sizes {
                      sizes: string[];
                  }
              
                  interface Pizza extends Sizes {
                      name: string;
                      toppings?: number;
                      getAvailableSizes(): string[];
                      [key: number]: string;
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
                  pizza.toppings = 2;
                  pizza[1] = "some string";

                  console.log(pizza); // {1: "some string", getAvailableSizes: ƒ (), name: "Pineapple", sizes: (2) ["large", "medium"], toppings:  2}
				</code>
			</pre>`;
    window.printAndHighlightCode("indexSignatures");
  }
};

angular
  .module("interfaces")
  .component("indexSignatures", indexSignatures)
  .config(function($stateProvider) {
    $stateProvider.state("interfaces.indexSignatures", {
      url: "/indexSignatures",
      views: {
        "details@interfaces": {
          component: "indexSignatures"
        }
      }
    });
  });
