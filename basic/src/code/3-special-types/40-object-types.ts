const objectTypes = function() {
  console.log("... 10: Object Types ...");

  let pizza: { name: string; price: number; getName(): string } = {
    name: "Hawaiian Pizza",
    price: 15,
    getName() {
      return pizza.name;
    }
  };

  console.log(pizza.getName());
};

window.TSNamespace.objectTypes = objectTypes;
