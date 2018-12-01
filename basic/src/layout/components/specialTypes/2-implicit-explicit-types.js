var implicitExplicitTypes = {
	template: `<div ng-bind-html="myTemplate"></div>`,
	controller: function ($scope) {
		$scope.myTemplate = `<h1>Implicit Explicit Types</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
					let implicitCoupon = "pizza25";
					let explicitCoupon: string = "pizza25";
				</code>
			</pre>`;
		window.printAndHighlightCode('implicitExplicitTypes');
	}
};

angular
	.module('special')
	.component('implicitExplicitTypes', implicitExplicitTypes)
	.config(function ($stateProvider) {
		$stateProvider
			.state('special.implicitExplicitTypes', {
				url: '/implicitExplicitTypes',
				views: {
					'details@special': {
						component: 'implicitExplicitTypes'
					}
				}
			});
	});