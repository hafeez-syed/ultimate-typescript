var anyType = {
	template: `<div ng-bind-html="myTemplate"></div>`,
	controller: function ($scope, $window) {
		$scope.myTemplate = `<h1>Number Type</h1>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                let pizzaCost: number = 5;
                let pizzaToppings: number = 15;
            
                <em style="text-decoration: underline;">pizzaCost</em> = '100'; // Type ERROR: '100' is not assignable to type number
            
                function calculatePrice(cost: number, toppings: number): number {
                    return cost + 1.5 * toppings;
                }
            
                const cost: number  = calculatePrice(pizzaCost, pizzaToppings);
            
                console.log(cost); // 27.5
                </code>
            </pre>`;
		numberTypes();
		window.highlightCode();
	}
};

angular
	.module('special')
	.component('anyType', anyType)
	.config(function ($stateProvider) {
		$stateProvider
			.state('special.anyType', {
				url: '/anyType',
				views: {
					'details@special': {
						component: 'anyType'
					}
				}
			});
	});