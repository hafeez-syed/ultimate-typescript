var interfaceOptionalProperties = function () {
    console.log("... 4: Interface with Optional Properties ...");
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
    console.log(pizza);
};
window.TSNamespace.interfaceOptionalProperties = interfaceOptionalProperties;
