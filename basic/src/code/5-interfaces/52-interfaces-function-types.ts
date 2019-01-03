const interfaceWithFunctionTypes = function() {
  console.log("... 2: Interfaces and Function Types ...");

  interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSizes(): string[];
  }

  let pizza: Pizza;

  function createPizza(name: string, sizes: string[]): Pizza {
    const pizza: Pizza = {
        name,
        sizes,
        getAvailableSizes() {
          return this.sizes;
        }
      };

    return pizza;
  }

  pizza = createPizza("Pineapple", ["large", "medium"]);
  console.log(pizza);
};

window.TSNamespace.interfaceWithFunctionTypes = interfaceWithFunctionTypes;
