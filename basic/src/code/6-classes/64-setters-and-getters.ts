const settersAndGetters = function() {
  console.log("... 4: Setters and Getters [Accessors] ...");

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

  let sizes = new Sizes(["small", "medium"]);

  // getter
  console.log(sizes.availableSizes); // ["small", "medium"]

  // setter
  sizes.availableSizes = ["medium", "large"];

  // getter
  console.log(sizes.availableSizes); // ["medium", "large"]
};

window.TSNamespace.settersAndGetters = settersAndGetters;
