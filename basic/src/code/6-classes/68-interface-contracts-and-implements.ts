const interfaceContractsAndImplements = function() {
  console.log("... 8: Interface Contracts and Implements ...");

  interface SizesInterface {
    availableSizes: string[];
  }

  abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]) {
    }

    get availableSizes() {
      return this.sizes;
    }

    set availableSizes(sizes: string[]) {
      this.sizes = sizes;
    }

    // child class must implement this protected abstract method
    protected abstract sizeList(): string[];
  }

  interface PizzaInterface extends SizesInterface {
    readonly name: string;
    toppings: string[];
    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
  }


  class Pizza extends Sizes implements PizzaInterface {
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
      super(sizes);

      this.name = "Hawaiian";
    }

    public updateSizes(sizes: string[]): void {
      this.sizes = sizes;
    }

    // must implement the protected abstract method from the parent class
    public sizeList(): string[] {
      return ["small", "medium", "large", "family"];
    }

    public addTopping(topping: string): void {
      this.toppings.push(topping);
    }
  }

  let pizza = new Pizza("Hawaiian", ["small", "medium"]);

  console.log(pizza.availableSizes);

  pizza.updateSizes(["family"]);
  pizza.addTopping("Olive");

  console.log(pizza.availableSizes);

  console.log(pizza.sizeList());

  console.log(pizza.toppings);
};

window.TSNamespace.interfaceContractsAndImplements = interfaceContractsAndImplements;
