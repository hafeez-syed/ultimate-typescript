const indexSignatures = function() {
    console.log("... 5: Interface with Index Signatures ...");

    interface Sizes {
        sizes: string[];
    }

    interface Pizza extends Sizes {
        name: string;
        toppings?: number;
        getAvailableSizes(): string[];
        [key: number]: string;
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
    pizza[1] = "some string";
    pizza.toppings = 2;

    console.log(pizza);

};

window.TSNamespace.indexSignatures = indexSignatures;
