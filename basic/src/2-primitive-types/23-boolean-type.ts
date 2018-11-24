function booleanTypes() {
    console.log("... 3: Boolean Types ...");

    const pizzas: number = 5;

    function offerDiscount(orders: number): boolean {
        return orders >= 3;
    }

    if(offerDiscount(pizzas)) {
        console.log(`You are entitled for a discount!`);
    } else {
        console.log(`Order more than 2 pizzas for a discount!`);
    }
}