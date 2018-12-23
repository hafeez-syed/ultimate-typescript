const tupleTypesForArrays = function() {
  console.log("... 12: Tuple Types for Arrays ...");

  let pizza: [string, number, boolean];

  pizza = ["Pepperoni", 20, true]; // exact data type order

  console.log(
    "exact data type order as defined in tuple type i.e [string, number, boolean]"
  );
  console.log(pizza);
};

window.TSNamespace.tupleTypesForArrays = tupleTypesForArrays;
