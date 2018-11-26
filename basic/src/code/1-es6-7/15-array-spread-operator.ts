const arrayObjectSpreads = function() {
  console.log("... 5: Array and Object Spreads ...");
  console.log("\n--- ES5 way ---\n");

  var toppings = ["olive", "chilli"];
  var moreToppings = ["tomato", "cheese"];

  var allToppings = toppings.concat(moreToppings);
  console.log("All Toppings");
  console.log(allToppings);

  console.log("\n--- ES6 way ---\n");

  const topppings = ["olive", "chilli"];
  const moreTopppings = ["tomato", "cheese"];

  const allTopppings = [...topppings, ...moreTopppings];

  console.log("All Toppings");
  console.log(allTopppings);
};

arrayObjectSpreads();
