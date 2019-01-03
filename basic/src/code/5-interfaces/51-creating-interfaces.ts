const creatingInterfaces = function() {
  console.log("... 1: Creating Interfaces ...");

  interface Pizza {
    name: string;
    sizes: string[];
  }

  let pizza: Pizza[];

  function createPizza(name: string, sizes: string[]): Pizza[] {
    const pizzas: Pizza[] = [
      {
        name,
        sizes
      }
    ];

    return pizzas;
  }

  pizza = createPizza("Pepperoni", ["small", "medium"]);

  console.log(`pizza: ${JSON.stringify(pizza)}`);
};

window.TSNamespace.creatingInterfaces = creatingInterfaces;
