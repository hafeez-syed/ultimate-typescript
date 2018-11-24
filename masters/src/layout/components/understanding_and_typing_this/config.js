var this_typing = {
    template: `
		<div class="layout">
			<div class="layout-methods">
				<div ui-view="methods"></div>
			</div>
			<div class="layout-details" ui-view="details"></div>
		</div>
	`
};

this_typing.$inject = ['$window'];

angular
    .module('this')
    .component('this', this_typing)
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('this', {
                redirectTo: 'this.thisTyping',
                url: '/this',
                views: {
                    // default view
                    '@': {
                        component: 'this'
                    },
                    'methods@this': {
                        component: 'thisMethods'
                    }
                }
            });
        $urlRouterProvider.otherwise('/this');
    });