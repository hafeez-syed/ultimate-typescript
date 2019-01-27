var contractsAndImplements = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Interface Contracts and "Implements"</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  interface SizesInterface {
                      availableSizes: string[];
                  }
                  
                  abstract class Sizes implements SizesInterface {
                    constructor(protected sizes: string[]) {
                  }
                
                  get availableSizes() {
                      return this.sizes;
                  }
                
                  set availableSizes(sizes: string[]) {
                      this.sizes = sizes;
                  }
                
                  // child class must implement this protected abstract method
                    protected abstract sizeList(): string[];
                  }
                
                  interface PizzaInterface extends SizesInterface {
                    readonly name: string;
                    toppings: string[];
                    updateSizes(sizes: string[]): void;
                    addTopping(topping: string): void;
                  }
                
                
                  class Pizza extends Sizes implements PizzaInterface {
                    public toppings: string[] = [];
                
                    constructor(readonly name: string, sizes: string[]) {
                      super(sizes);
                
                      this.name = "Hawaiian";
                    }
                
                    public updateSizes(sizes: string[]): void {
                      this.sizes = sizes;
                    }
                
                    // must implement the protected abstract method from the parent class
                    public sizeList(): string[] {
                      return ["small", "medium", "large", "family"];
                    }
                
                    public addTopping(topping: string): void {
                      this.toppings.push(topping);
                    }
                  }
                
                  let pizza = new Pizza("Hawaiian", ["small", "medium"]);
                
                  console.log(pizza.availableSizes); // ["small", "medium"]
                
                  pizza.updateSizes(["family"]);
                  pizza.addTopping("Olive");
                
                  console.log(pizza.availableSizes); ["family"]
                
                  console.log(pizza.sizeList()); // ["small", "medium", "large", "family"]
                
                  console.log(pizza.toppings); // ["Olive"]
				</code>
			</pre>`;
    window.printAndHighlightCode("interfaceContractsAndImplements");
  }
};

angular
  .module("classes")
  .component("contractsAndImplements", contractsAndImplements)
  .config(function($stateProvider) {
    $stateProvider.state("classes.contractsAndImplements", {
      url: "/contractsAndImplements",
      views: {
        "details@classes": {
          component: "contractsAndImplements"
        }
      }
    });
  });
