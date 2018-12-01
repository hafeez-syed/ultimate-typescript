const arrowFunctions = function() {
  console.log("... 1: Arrow Functions ...");
  const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];
  console.log("Pizzas:", pizzas);

  // ES5 way
  let mappedPizzas = pizzas.map(function(pizza) {
    return pizza.name.toUpperCase();
  });
  console.log(
    "\n--- ES5 way ---\npizzas.map(function(pizza) {\n...\n})\n" + mappedPizzas
  );

  // ES6 way (for single param)
  mappedPizzas = pizzas.map(pizza => {
    return pizza.name.toUpperCase();
  });
  console.log(
    "\n--- ES6 way (for single param) ---\npizzas.map(pizza => {\n...\n})\n" +
      mappedPizzas
  );

  // ES6 way (for multiple params)
  mappedPizzas = pizzas.map(pizza => {
    return pizza.name.toUpperCase();
  });
  console.log(
    "\n--- ES6 way (for multiple params) ---\npizzas.map((pizza, index) => {\n...\n})\n" +
      mappedPizzas
  );

  // ES6 way (implicit return)
  mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());
  console.log(
    "\n--- ES6 way (implicit return) ---\npizzas.map(pizza => pizza.name.toUpperCase())\n" +
      mappedPizzas
  );

  const pizza = {
    name: "Blazing Inforno.",
    getName: function() {
      console.log(this);
    },
    sTimeout: function() {
      setTimeout(function() {
        console.log("--- ES5 way ---");
        console.log(this);
      }, 100);
    },
    tTimeout: function() {
      setTimeout(() => {
        console.log("----  ES6 way  ----");
        console.log(this);
      }, 100);
    }
  };

  pizza.getName();
  pizza.sTimeout();
  pizza.tTimeout();
};

window.TSNamespace.arrowFunctions = arrowFunctions;
