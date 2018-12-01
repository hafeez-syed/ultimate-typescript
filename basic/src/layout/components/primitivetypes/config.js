var primitive = {
    template: `
		<div class="layout">
			<div class="layout-methods">
				<div ui-view="methods"></div>
			</div>
			<div class="layout-details" ui-view="details"></div>
		</div>
    `,
    controller: function () {}
};

angular
    .module('primitive')
    .component('primitive', primitive)
    .config(function ($stateProvider) {
        $stateProvider
            .state('primitive', {
                redirectTo: 'primitive.numberType',
                url: '/primitive',
                views: {
                    // default view
                    '@': {
                        component: 'primitive'
                    },
                    'methods@primitive': {
                        component: 'primitiveMethods'
                    }
                }
            });
    });