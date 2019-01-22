var publicPrivateMembers = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Public and Private Members</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  class Pizza {
                      public toppings:  string[] = [];
                  
                      constructor(private name: string) {
                        this.name = name;
                      }
                  
                      public addToppings(topping: string): void {
                        this.toppings.push(topping);
                        this.showMessage(topping  + " is added to the " + this.name + " Pizza");
                      }
                  
                      public removeToppings(toppingToRemove: string): void {
                        this.toppings = this.toppings.filter(topping => topping !== toppingToRemove);
                        this.showMessage(topping  + " is removed from the " + this.name + " Pizza");
                      }
                  
                      private showMessage(message: string): void {
                        console.log(message);
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
    window.printAndHighlightCode("publicPrivateMembers");
  }
};

angular
  .module("classes")
  .component("publicPrivateMembers", publicPrivateMembers)
  .config(function($stateProvider) {
    $stateProvider.state("classes.publicPrivateMembers", {
      url: "/publicPrivateMembers",
      views: {
        "details@classes": {
          component: "publicPrivateMembers"
        }
      }
    });
  });
