const publicPrivateMembers = function() {
  console.log("... 2: Public and Private Members ...");

  class Pizza {
    public toppings:  string[] = [];

    constructor(private name: string) {
      this.name = name;
    }

    public addToppings(topping: string): void {
      this.toppings.push(topping);
      this.showMessage(`${topping} is added to the ${this.name} Pizza`);
    }

    public removeToppings(toppingToRemove: string): void {
      this.toppings = this.toppings.filter(topping => topping !== toppingToRemove);
      this.showMessage(`${toppingToRemove} is removed from the ${this.name} Pizza`);
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
};

window.TSNamespace.publicPrivateMembers = publicPrivateMembers;
