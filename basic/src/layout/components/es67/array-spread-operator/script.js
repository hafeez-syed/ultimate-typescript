var spreads = {
    template: `
		<div>
            <h1>Array Spread Operator</h1>
            <h3>ES5 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
			    var toppings = ['olive', 'chilli'];
			    var moreToppings = ['tomato', 'cheese'];
			
			    var allToppings = toppings.concat(moreToppings);
			    
			    console.log('All Toppings');
			    console.log(allToppings); // ["olive", "chilli", "tomato", "cheese"]
                </code>
            </pre>

            <h3>ES6 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
			    const topppings = ['olive', 'chilli'];
			    const moreTopppings = ['tomato', 'cheese'];
			
			    const allTopppings = [...topppings, ...moreTopppings];
			
			    console.log('All Toppings');
			    console.log(allTopppings); // ["olive", "chilli", "tomato", "cheese"]
                </code>
            </pre>
        </div>`,
    controller: function ($window) {
        window.highlightCode();
    }
};

angular
    .module('es67')
    .component('spreads', spreads)
    .config(function ($stateProvider) {
        $stateProvider
            .state('es67.arrayObjectSpread', {
                url: '/arrayObjectSpread',
                views: {
                    'details@es67': {
                        component: 'spreads'
                    }
                }
            });
    });