var readOnlyMembers = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Readonly Members</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                class Pizza {
                    public toppings: string[] = [];
                    readonly name: string;
                
                    constructor() {
                      this.name = "Hawaiian";
                    }
                
                    public addToppings(topping: string): void {
                      this.toppings.push(topping);
                      this.showMessage(topping  + " is added to the " + this.name + " Pizza");
                    }
                    private showMessage(message: string): void {
                      console.log(message);
                    }
                  }
                
                  // Instantiate / Create Pizza
                  const pizza = new Pizza();
                
                  pizza.addToppings("Tomoto");
                  console.log(pizza.name);
                
                  // cannot change a read-only property
                  // NOTE: Its compile-time check only
                  
                  // pizza.name = "Spicy";
				</code>
			</pre>`;
    window.printAndHighlightCode("readonlyMembers");
  }
};

angular
  .module("classes")
  .component("readOnlyMembers", readOnlyMembers)
  .config(function($stateProvider) {
    $stateProvider.state("classes.readOnlyMembers", {
      url: "/readOnlyMembers",
      views: {
        "details@classes": {
          component: "readOnlyMembers"
        }
      }
    });
  });
