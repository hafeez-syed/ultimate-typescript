function objectLiterals() {
    console.log("... 3: Object Literals ...");
    console.log("\n--- ES5 way ---\n");

    var pizza = {
        name: 'Pepperoni',
        price: 15,
        getName: function() {
            return this.name;
        }
    };

    var toppings = ['pepperoni'];

    var order = {
        pizza: pizza,
        toppings: toppings,
    };

    console.log("ORDER");
    console.log(order);

    console.log("\n--- ES6 way ---\n");

    const pizzza = {
        name: 'Pepperoni',
        price: 15,
        getName() {
            return this.name;
        }
    };

    const topppings = ['pepperoni'];

    const orderr = { pizzza, topppings };

    console.log("ORDER");
    console.log(orderr);
}