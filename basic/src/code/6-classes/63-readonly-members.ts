const readonlyMembers = function() {
  console.log("... 3: Readonly Members ...");

  class Pizza {
    public toppings: string[] = [];
    readonly name: string;

    constructor() {
      this.name = "Hawaiian";
    }

    public addToppings(topping: string): void {
      this.toppings.push(topping);
      this.showMessage(`${topping} is added to the ${this.name} Pizza`);
    }
    private showMessage(message: string): void {
      console.log(message);
    }
  }

  // Instantiate / Create Pizza
  const pizza = new Pizza();

  pizza.addToppings("Tomoto");
  console.log(pizza.name);

  // cannot change a read-only property.
  // NOTE: Its compile-time check only
  // pizza.name = "Spicy";
};

window.TSNamespace.readonlyMembers = readonlyMembers;
