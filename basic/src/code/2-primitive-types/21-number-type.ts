const numberTypes = function() {
  console.log("... 1: Number Types ...");

  let pizzaCost: number = 10;
  let pizzaToppings: number = 2;

  //pizzaCost = '100';

  function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
  }

  const cost: number = calculatePrice(pizzaCost, pizzaToppings);

  console.log(`Pizza costs: ${cost}`); // 13
};
numberTypes();
