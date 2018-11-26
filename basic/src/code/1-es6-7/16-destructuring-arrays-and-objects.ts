const destructuringObjects = function() {
  console.log("... 6: Destructuring Arrays and Objects ...");
  console.log("\n--- ES5 way ---\n");

  var pizza = {
    name: "pepperoni",
    toppings: ["olives"]
  };

  function order(pizza: any) {
    console.log(pizza.name, pizza.toppings);
  }

  order(pizza);

  console.log("\n--- ES6 way ---\n");

  const pizzza = {
    name: "pepperoni",
    toppings: ["olives"]
  };

  function orderr({ name, toppings }: any) {
    console.log(name, toppings);
  }

  orderr(pizzza);

  // Renaming variables: name -> pizzaName, toppings -> pizzaToppings
  function newOrder({ name: pizzaName, toppings: pizzaToppings }: any) {
    console.log("\n\nRenamed variables");
    console.log(pizzaName, pizzaToppings);
    return { pizzaName, pizzaToppings };
  }

  // Destructuring property from {pizzaName, pizzaToppings}
  const { pizzaName } = newOrder(pizzza);
  console.log("pizzaName::", pizzaName);

  // Array Destructuring
  const pizzaToppings = ["olives", "cheese", "tomato"];
  const [first, second, third] = pizzaToppings;

  console.log(first, second, third);

  function logToppings([first, second, third]: any) {
    console.log([first, second, third]);
  }

  logToppings(pizzaToppings);
};

destructuringObjects();
