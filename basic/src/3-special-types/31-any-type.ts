function anyTypes() {
  console.log("... 1: Any Types ...");

  const coupon: string = "pizza25";

  function normalizeCoupon(code: string): string {
    return code.toUpperCase();
  }

  const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

  console.log(couponMessage); // Final coupon is PIZZA25
}
