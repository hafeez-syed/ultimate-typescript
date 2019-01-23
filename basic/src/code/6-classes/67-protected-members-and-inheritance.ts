const protectedMembersAndInheritance = function() {
  console.log("... 7: Protected Members and Inheritance ...");

  abstract class Sizes {
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


  class Pizza extends Sizes {
    public toppings: string[] = [];

    constructor(public name: string, sizes: string[]) {
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
  }

  let pizza = new Pizza("Hawaiian", ["small", "medium"]);

  console.log(pizza.availableSizes);

  pizza.updateSizes(["family"]);

  console.log(pizza.availableSizes);

  console.log(pizza.sizeList());
};

window.TSNamespace.protectedMembersAndInheritance = protectedMembersAndInheritance;
