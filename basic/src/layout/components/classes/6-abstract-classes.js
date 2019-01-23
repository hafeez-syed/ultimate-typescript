var abstractClasses = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope, $window) {
    $scope.myTemplate = `<h1>Understanding Classes and Constructor</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  abstract class Sizes {
                      constructor(public sizes: string[]) {
                      }
                  
                      get availableSizes() {
                        return this.sizes;
                      }
                  
                      set availableSizes(sizes: string[]) {
                        this.sizes = sizes;
                      }
                    }
                    
                    // Cannot create an instance of an abstract class
                    // new Sizes(['small']);
                    
                    class Pizza extends Sizes {
                      public toppings: string[] = [];
                  
                      constructor(public name: string, public sizes: string[]) {
                        super(sizes);
                  
                        this.name = "Hawaiian";
                      }
                    }
                  
                    let pizza = new Pizza("Hawaiian", ["small", "medium"]);
                  
                    // inherited getter method from parent Sizes class
                    console.log(pizza.availableSizes); // ["small", "medium"]
                  
                    pizza.availableSizes = ["large", "family"];
                  
                    console.log(pizza.availableSizes); // ["large", "family"]
				</code>
			</pre>`;
    window.printAndHighlightCode("abstractClasses");
  }
};

angular
  .module("classes")
  .component("abstractClasses", abstractClasses)
  .config(function($stateProvider) {
    $stateProvider.state("classes.abstractClasses", {
      url: "/abstractClasses",
      views: {
        "details@classes": {
          component: "abstractClasses"
        }
      }
    });
  });
