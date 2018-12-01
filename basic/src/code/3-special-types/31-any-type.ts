const anyType = function() {
  console.log("... 1: Any Type ...");

  let coupon: any;

  coupon = 25;
  console.log("coupon:", coupon);

  coupon = "pizza25";
  console.log("coupon:", coupon);

  coupon = true;
  console.log("coupon:", coupon);
};

window.TSNamespace.anyType = anyType;
