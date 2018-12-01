var objectLiteral = {
    template: `
		<div>
            <h1>Object Literal Improvement</h1>
            <h3>ES5 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
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
                </code>
            </pre>

            <h3>ES6 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                const pizza = {
                    name: 'Pepperoni',
                    price: 15,
                    getName() { // NOTICE: It's not 'getName: function() {...}'
                        return this.name;
                    }
                };
            
                const toppings = ['pepperoni'];
            
                const order = { pizza, toppings };

                function createOrder(pizza: any, toppings: string[]) {
                    return { pizza, toppings };
                }
                
                console.log("Create ORDER");
                console.log(createOrder(pizza, toppings));
                
                </code>
            </pre>
        </div>`,
    controller: function () {
        window.printAndHighlightCode('objectLiterals');
    }
};

angular
    .module('es67')
    .component('objectLiteral', objectLiteral)
    .config(function ($stateProvider) {
        $stateProvider
            .state('es67.objectLiteral', {
                url: '/objectLiteral',
                views: {
                    'details@es67': {
                        component: 'objectLiteral'
                    }
                }
            });
    });