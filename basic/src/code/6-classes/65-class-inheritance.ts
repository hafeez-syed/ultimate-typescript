const classInheritance = function() {
  console.log("... 5: Class Inheritance ...");

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
};

window.TSNamespace.classInheritance = classInheritance;
