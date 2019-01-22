const classesConstructor = function() {
  console.log("... 1: Classes and Constructor ...");

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
};

window.TSNamespace.classesConstructor = classesConstructor;
