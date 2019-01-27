const staticPropertiesAndMembers = function() {
  console.log("... 9: Static Properties and Members ...");

  class Coupon {
    static allowed = ["Tandoori", "Blazing Inferno"];

    static create(percentage: number) {
      return `PIZZA_RESTAURANT_${percentage}`;
    }
  }

  // We dont instantiate a class to access static properties or methods
  console.log(Coupon.allowed);
  console.log(Coupon.create(20));
};

window.TSNamespace.staticPropertiesAndMembers = staticPropertiesAndMembers;
