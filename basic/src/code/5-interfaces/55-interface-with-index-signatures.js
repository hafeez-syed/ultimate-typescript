var indexSignatures = function () {
    console.log("... 5: Interface with Index Signatures ...");
    var pizza;
    function createPizza(name, sizes) {
        var pizza = {
            name: name,
            sizes: sizes,
            getAvailableSizes: function () {
                return this.sizes;
            }
        };
        return pizza;
    }
    pizza = createPizza("Pineapple", ["large", "medium"]);
    pizza.toppings = 2;
    console.log(pizza);
};
window.TSNamespace.indexSignatures = indexSignatures;
