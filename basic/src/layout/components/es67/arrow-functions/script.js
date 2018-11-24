var arrowFunction = {
    template: `
		<div>
            <h1>Arrow Functions and Implicit returns</h1>
            <pre class="line-numbers">
                <code class="language-javascript">
                const pizzas = [{name: "Pepperoni", toppings: ["pepperoni"]}];
                </code>
            </pre>

            <h3>ES5 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                let mappedPizzas = pizzas.map(function (pizza) {
                    return pizza.name.toUpperCase();
                });
                </code>
            </pre>

            <h3>ES6 way</h3>
            <h3> - Arrow Functions (single param)</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                let mappedPizzas = pizzas.map(pizza => {
                    return pizza.name.toUpperCase();
                });
                </code>
            </pre>

            <h3> - Arrow Functions (multiple params)</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                let mappedPizzas = pizzas.map((pizza, index) => {
                    return pizza.name.toUpperCase();
                });
                </code>
            </pre>

            <h3> - Implicit return</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                let mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

                const pizza = {
                        name: "Blazing Inferno.",
                        getName: function () {
                            console.log(this);
                        },
                        sTimeout: function () {
                            setTimeout(function () {
                                console.log("--- ES5 way ---");
                                console.log(this);
                            }, 100);
                        },
                        tTimeout: function () {
                            setTimeout(() => {
                                console.log("--- ES6 way ---");
                                console.log(this);
                            }, 100);
                        }
                    };
                    
                    // ES5 WAY
                    pizza.getName(); // {name: 'Blazing Inferno.', getName: function(), sTimeout: function(), tTimeout: function()}

                    // ES5 WAY
                    pizza.sTimeout(); // Window {...}

                    // ES6 WAY
                    pizza.tTimeout(); // {name: 'Blazing Inferno.', getName: function(), sTimeout: function(), tTimeout: function()}

                </code>
            </pre>
        </div>`,
    controller: function ($window) {
        arrowFunctions();
        window.highlightCode();
    }
};

angular
    .module('es67')
    .component('arrowFunction', arrowFunction)
    .config(function ($stateProvider) {
        $stateProvider
            .state('es67.arrowFunction', {
                url: '/arrowFunction',
                views: {
                    'details@es67': {
                        component: 'arrowFunction'
                    }
                }
            });
    });