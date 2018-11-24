function numberTypes() {
    console.log("... 1: Number Types ...");

    let pizzaCost: number = 5;
    let pizzaToppings: number = 15;

    //pizzaCost = '100';

    function calculatePrice(cost: number, toppings: number): number {
        return cost + 1.5 * toppings;
    }

    const cost: number  = calculatePrice(pizzaCost, pizzaToppings);

    console.log(`Pizza costs: ${cost}`); // 27.5
}