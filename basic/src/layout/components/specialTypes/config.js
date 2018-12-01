var special = {
	template: `
		<div class="layout">
			<div class="layout-methods">
				<div ui-view="methods"></div>
			</div>
			<div class="layout-details" ui-view="details"></div>
		</div>
	`
};

angular
	.module('special')
	.component('special', special)
	.config(function ($stateProvider) {
		$stateProvider
			.state('special', {
				redirectTo: 'special.anyType',
				url: '/special',
				views: {
					// default view
					'@': {
						component: 'special'
					},
					'methods@special': {
						component: 'specialMethods'
					}
				}
			});
	});