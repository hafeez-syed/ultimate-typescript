const settersAndGetters = function() {
  console.log("... 4: Setters and Getters [Accessors] ...");

  class Sizes {
    sizes: string[] = ["small", "medium"];

    get availableSizes() {
      return this.sizes;
    }

    set availableSizes(sizes: string[]) {
      this.sizes = sizes;
    }
  }

  let sizes = new Sizes();

  // getter
  console.log(sizes.availableSizes); // ["small", "medium"]

  // setter
  sizes.availableSizes = ["medium", "large"];

  // getter
  console.log(sizes.availableSizes); // ["medium", "large"]
};

window.TSNamespace.settersAndGetters = settersAndGetters;
