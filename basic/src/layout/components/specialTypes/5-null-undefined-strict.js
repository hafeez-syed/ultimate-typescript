var nullUndefinedStrict = {
	template: `<div ng-bind-html="myTemplate"></div>`,
	controller: function ($scope) {
		$scope.myTemplate = `<h1>Null, Undefined, Strict Null checks</h1>
            <pre class="line-numbers language-typescript">
				<code class="language-typescript">
					let coupon: string | null = "pizza25";

					function removeCoupon(): void {
						coupon = null;
					}
				
					console.log(coupon); // pizza25 
				
					removeCoupon();
				
					console.log(coupon); // null  
				</code>
			</pre>`;
		window.printAndHighlightCode('nullUndefinedStrict');
	}
};

angular
	.module('special')
	.component('nullUndefinedStrict', nullUndefinedStrict)
	.config(function ($stateProvider) {
		$stateProvider
			.state('special.nullUndefinedStrict', {
				url: '/nullUndefinedStrict',
				views: {
					'details@special': {
						component: 'nullUndefinedStrict'
					}
				}
			});
	});