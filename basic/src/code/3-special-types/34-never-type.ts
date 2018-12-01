const neverType = function() {
  console.log("... 3: Never Type ...");

  function orderError(error: string): void {
    // change :void to :never to see the exception
    // never going to return a value
    // throw new Error(error);
    console.log(`throw new Error(${error})`);
  }

  orderError("Something went wrong!");
};

window.TSNamespace.neverType = neverType;
