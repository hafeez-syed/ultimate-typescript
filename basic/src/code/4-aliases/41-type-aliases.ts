const typeAliases = function() {
  console.log("... 1: Type Aliases ...");

  type Size = "small" | "medium" | "large";
  type Callback = (size: Size) => void;

  let pizzaSize: string = "small";

  const selectSize: Callback = x => {
    pizzaSize = x;
  };

  selectSize("medium");

  console.log(`PizzaSize: ${pizzaSize}`);
};

window.TSNamespace.typeAliases = typeAliases;
