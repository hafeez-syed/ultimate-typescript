const optionalArguments = function() {
  console.log("... 8: Function and Optional Arguments ...");

  let total: (price: number, quantity?: number) => number;

  total = (x, y) => {
    if (y) {
      return x * y;
    }

    return x;
  };

  let sum = total(25);

  console.log(`Total of 1 arg supplied: ${sum}`);

  sum = total(25, 2);

  console.log(`Total of both args supplied: ${sum}`);
};

window.TSNamespace.optionalArguments = optionalArguments;
