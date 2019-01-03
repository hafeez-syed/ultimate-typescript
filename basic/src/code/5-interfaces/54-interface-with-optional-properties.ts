const interfaceOptionalProperties = function() {
    console.log("... 4: Interface with Optional Properties ...");

    interface Sizes {
        sizes: string[];
    }

    interface Pizza extends Sizes {
        name: string;
        toppings?: number;
        getAvailableSizes(): string[];
    }

    let pizza: Pizza;

    function createPizza(name: string, sizes: string[]): Pizza {
        const pizza: Pizza = {
            name,
            sizes,
            getAvailableSizes() {
                return this.sizes;
            }
        };

        return pizza;
    }

    pizza = createPizza("Pineapple", ["large", "medium"]);
    pizza.toppings = 2;
    console.log(pizza);

};

window.TSNamespace.interfaceOptionalProperties = interfaceOptionalProperties;
