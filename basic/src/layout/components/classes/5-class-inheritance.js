var classInheritance = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Classes Inheritance</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  class Sizes {
                      constructor(public sizes: string[]) {
                      }
                  
                      get availableSizes() {
                        return this.sizes;
                      }
                  
                      set availableSizes(sizes: string[]) {
                        this.sizes = sizes;
                      }
                    }
                  
                    class Pizza extends Sizes {
                      public toppings: string[] = [];
                  
                      constructor(public name: string, public sizes: string[]) {
                        super(sizes);
                  
                        this.name = "Hawaiian";
                      }
                    }
                  
                    let pizza = new Pizza("Hawaiian", ["small", "medium"]);
                  
                    // inherited getter method from parent Sizes class
                    console.log(pizza.availableSizes);
                  
                    pizza.availableSizes = ["large", "family"];
                  
                    console.log(pizza.availableSizes);
				</code>
			</pre>`;
    window.printAndHighlightCode("classInheritance");
  }
};

angular
  .module("classes")
  .component("classInheritance", classInheritance)
  .config(function($stateProvider) {
    $stateProvider.state("classes.classInheritance", {
      url: "/classInheritance",
      views: {
        "details@classes": {
          component: "classInheritance"
        }
      }
    });
  });
