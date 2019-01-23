const abstractClasses = function() {
  console.log("... 6: Abstract Classes ...");

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
  console.log(pizza.availableSizes);

  pizza.availableSizes = ["large", "family"];

  console.log(pizza.availableSizes);
};

window.TSNamespace.abstractClasses = abstractClasses;
