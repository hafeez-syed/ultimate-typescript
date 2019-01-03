const extendingInterfaces = function() {
    console.log("... 3: Extending Interfaces ...");

    interface Sizes {
        sizes: string[];
    }

    interface Pizza extends Sizes {
        name: string;
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
    console.log(pizza);

};

window.TSNamespace.extendingInterfaces = extendingInterfaces;
