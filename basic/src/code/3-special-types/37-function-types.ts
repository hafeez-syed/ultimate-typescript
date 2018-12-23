const functionTypes = function() {
  console.log("... 7: Function Types ...");

  let sumOrder: Function;

  sumOrder = (price: number, quantity: number): number => {
    return price * quantity;
  };

  let sum = sumOrder(25, 2);

  console.log(`Total sum: ${sum}`);

  let total: (price: number, quantity: number) => number;

  total = (x, y) => x * y;

  console.log(`Total: ${total(30, 5)}`);
};

window.TSNamespace.functionTypes = functionTypes;
