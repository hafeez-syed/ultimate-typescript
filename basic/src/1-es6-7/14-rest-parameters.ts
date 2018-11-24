function restParameters() {
    console.log("... 4: Rest Parameters ...");
    console.log("\n--- ES5 way ---\n");

    function sum(arr: number[]) {
        return arr.reduce(function(prev: number, next: number) {
            return prev + next;
        });
    }

    var total = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    console.log("TOTAL");
    console.log(total);

    console.log("\n--- ES6 way ---\n");

    function summ(...arr: any[]) {
        return arr.reduce((prev: number, next: number) => prev + next);
    }

    const sumTotal = summ(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    console.log("TOTAL");
    console.log(sumTotal);
}