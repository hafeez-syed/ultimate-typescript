const unionLiteralTypes = function() {
  console.log("... 6: Union and Literal types ...");

  let pizzaSize: string | number = "small";

  function selectSize(size: 12 | "small" | "medium" | "large"): void {
    pizzaSize = size;
  }

  console.log(`Pizza size: ${pizzaSize}`);

  selectSize("large");

  console.log(`Pizza size: ${pizzaSize}`);

  selectSize(12);

  console.log(`Pizza size: ${pizzaSize}`);
};

window.TSNamespace.unionLiteralTypes = unionLiteralTypes;
