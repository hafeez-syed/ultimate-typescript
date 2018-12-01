var voidType = {
	template: `<div ng-bind-html="myTemplate"></div>`,
	controller: function ($scope) {
		$scope.myTemplate = `<h1>Void Type</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
					let selectedTopping = "cheese";

					function topping(topping: string): void {
						selectedTopping = topping;
					}
				
					topping("tomatos");
				
					console.log(selectedTopping); // tomatos
				</code>
			</pre>`;
		window.printAndHighlightCode('voidType');
	}
};

angular
	.module('special')
	.component('voidType', voidType)
	.config(function ($stateProvider) {
		$stateProvider
			.state('special.voidType', {
				url: '/voidType',
				views: {
					'details@special': {
						component: 'voidType'
					}
				}
			});
	});