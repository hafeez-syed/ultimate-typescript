var anyType = {
	template: `<div ng-bind-html="myTemplate"></div>`,
	controller: function ($scope, $window) {
		$scope.myTemplate = `<h1>Any Type</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
					let coupon: any;

					coupon = 25;
					console.log("coupon:", coupon); // 25
				
					coupon = "pizza25";
					console.log("coupon:", coupon); // pizza25
				
					coupon = true;
					console.log("coupon:", coupon); // true
				</code>
			</pre>`;
		window.printAndHighlightCode('anyType');
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