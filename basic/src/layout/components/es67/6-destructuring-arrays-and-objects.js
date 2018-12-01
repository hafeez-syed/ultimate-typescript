var destructuring = {
	template: `
		<div>
            <h1>Destructuring Arrays and Objects</h1>
            <h3>ES5 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
			    var pizza = {
			        name: 'pepperoni',
			        toppings: ['olives']
			    };
			
			    function order(pizza) {
			        console.log(pizza.name, pizza.toppings);
			    }
			
			    order(pizza);
                </code>
            </pre>

            <h3>ES6 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
			    const pizza = {
			        name: 'pepperoni',
			        toppings: ['olives']
			    };
			
			    function order({name, toppings}: any) {
			        console.log(name, toppings);
			    }
			
			    orderr(pizza);
			
			    // Renaming variables: name -> pizzaName, toppings -> pizzaToppings
			    function newOrder({name: pizzaName, toppings: pizzaToppings}: any) {
			        console.log('\\n\\nRenamed variables');
			        console.log(pizzaName, pizzaToppings);
			        return { pizzaName, pizzaToppings};
			    }
			
			    // Destructuring property from {pizzaName, pizzaToppings}
				const { pizzaName } = newOrder(pizzza);
				console.log("pizzaName::", pizzaName); // pizzaName:: pepperoni
			
			    // Array Destructuring
			    const pizzaToppings = ['olives', 'cheese', 'tomato'];
			    const [first, second, third] = pizzaToppings;
			
			    console.log(first, second, third); // olives cheese tomato
			
			    function logToppings([first, second, third]: any) {
			        console.log([first, second, third]);
			    }
			
			    logToppings(pizzaToppings); // ["olives", "cheese", "tomato"] 
                </code>
            </pre>
        </div>`,
	controller: function () {
		window.printAndHighlightCode('destructuringObjects');
	}
};

angular
	.module('es67')
	.component('destructuring', destructuring)
	.config(function ($stateProvider) {
		$stateProvider
			.state('es67.destructuringObjects', {
				url: '/destructuringObjects',
				views: {
					'details@es67': {
						component: 'destructuring'
					}
				}
			});
	});