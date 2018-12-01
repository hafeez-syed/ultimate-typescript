const voidType = function() {
  console.log("... 3: Void Type ...");

  let selectedTopping = "cheese";

  function topping(topping: string): void {
    selectedTopping = topping;
  }

  topping("tomatos");

  console.log(selectedTopping);
};

window.TSNamespace.voidType = voidType;
