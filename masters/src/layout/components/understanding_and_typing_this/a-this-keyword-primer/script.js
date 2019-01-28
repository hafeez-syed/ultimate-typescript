var thisTyping = {
	template: `
		<div>
            <h1>A "this" Keyword Primer</h1>
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
	controller: function () {
		aThisKeywordPrimer();
		window.highlightCode();
	}
};

angular
	.module('this')
	.component('thisTyping', thisTyping)
	.config(function ($stateProvider) {
		$stateProvider
			.state('this.thisTyping', {
				url: '/this',
				views: {
					'details@this': {
						component: 'thisTyping'
					}
				}
			});
	});