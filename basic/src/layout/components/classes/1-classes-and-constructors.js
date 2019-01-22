var constructor = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Understanding Classes and Constructor</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                    class Pizza {
                      name: string;
                      toppings:  string[] = [];
                  
                      constructor(name: string) {
                        this.name = name;
                      }
                  
                      addToppings(topping: string): void {
                        this.toppings.push(topping);
                      }
                  
                      removeToppings(toppingToRemove: string): void {
                        this.toppings = this.toppings.filter(topping => topping !== toppingToRemove);
                      }
                    }
                  
                    // Instantiate / Create Pizza
                    const pizza = new Pizza("Hawaiian");
                  
                    // Add toppings to it
                    pizza.addToppings("Tomato");
                    pizza.addToppings("Olive");
                    pizza.addToppings("Extra Cheese");
                    pizza.addToppings("Pineapple");
                  
                    // Remove topping
                    pizza.removeToppings("Extra Cheese");
                    console.log(pizza); // {name: 'Hawaiian', toppings: ['Tomato', 'Olive', 'Pineapple']}
				</code>
			</pre>`;
    window.printAndHighlightCode("classesConstructor");
  }
};

angular
  .module("classes")
  .component("constructor", constructor)
  .config(function($stateProvider) {
    $stateProvider.state("classes.constructor", {
      url: "/constructor",
      views: {
        "details@classes": {
          component: "constructor"
        }
      }
    });
  });
