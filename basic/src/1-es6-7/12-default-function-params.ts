function defaultFunctionParameters() {
    console.log("... 2: Default functions parameters ...");
    console.log("\n--- ES5 way ---\n");

    function multiply(a: any, b?: any) {
        if(!a) {
            a = 5;
        }
        if(!b) {
            b = 25;
        }
        return a * b;
    }
    console.log("Multiplying a * b:", multiply(5));

    console.log("\n--- ES6 way ---\n");

    function multiplying(a = 2, b = 25) {
        return a * b;
    }
    console.log("Multiplying a * b:", multiplying());
}