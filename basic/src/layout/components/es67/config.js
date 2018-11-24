var es67 = {
    template: `
		<div class="layout">
			<div class="layout-methods">
				<div ui-view="methods"></div>
			</div>
			<div class="layout-details" ui-view="details"></div>
		</div>
	`
};

es67.$inject = ['$window'];

angular
    .module('es67')
    .component('es67', es67)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('es67', {
                redirectTo: 'es67.arrowFunction',
                url: '/es67',
                views: {
                    // default view
                    '@': {
                        component: 'es67'
                    },
                    'methods@es67': {
                        component: 'es67Methods'
                    }
                }
            });
        $urlRouterProvider.otherwise('/es67');
    });