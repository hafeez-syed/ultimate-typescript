const typedFunctions = function() {
  console.log("... 9: Typed Function and Default Params ...");

  let total: (price: number, quantity?: number) => number;

  total = (x, y = 1) => x * y;

  let sum = total(25);

  console.log(`Total of 1 supplied argument with default value: ${sum}`);

  sum = total(25, 2);

  console.log(`Total of both supplied arguments without default value: ${sum}`);
};

window.TSNamespace.typedFunctions = typedFunctions;
