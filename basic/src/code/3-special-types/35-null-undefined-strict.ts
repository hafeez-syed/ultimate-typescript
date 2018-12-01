const nullUndefinedStrict = function() {
  console.log("... 5: Null Undefined Strict null checks ...");

  let coupon: string | null = "pizza25";

  function removeCoupon(): void {
    coupon = null;
  }

  console.log(coupon);

  removeCoupon();

  console.log(coupon);
};

window.TSNamespace.nullUndefinedStrict = nullUndefinedStrict;
