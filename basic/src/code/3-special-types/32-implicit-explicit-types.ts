const implicitExplicitTypes = function() {
  console.log("... 2: implicit and Explicit Types ...");

  let implicitCoupon = "pizza25";
  console.log("inferred OR any type:-");
  console.log("implicitCoupon = 'pizza25'");

  let explicitCoupon: string = "pizza25";
};

window.TSNamespace.implicitExplicitTypes = implicitExplicitTypes;
