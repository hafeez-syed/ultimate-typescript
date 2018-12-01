var neverType = {
	template: `<div ng-bind-html="myTemplate"></div>`,
	controller: function ($scope) {
		$scope.myTemplate = `<h1>Never Type</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
					function orderError(error: string): never {
						// never going to return a value
						throw new Error(error);
					}
					
					orderError("Something went wrong!"); // Error: Something went wrong!
				</code>
			</pre>`;
		window.printAndHighlightCode('neverType');
	}
};

angular
	.module('special')
	.component('neverType', neverType)
	.config(function ($stateProvider) {
		$stateProvider
			.state('special.neverType', {
				url: '/neverType',
				views: {
					'details@special': {
						component: 'neverType'
					}
				}
			});
	});