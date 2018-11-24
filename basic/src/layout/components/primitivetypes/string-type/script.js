var stringType = {
    template: `
		<div>
		    <h1>String Type</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                const coupon: string = 'pizza25';
            
                function normalizeCoupon(code: string): string {
                    return code.toUpperCase();
                }
            
                const couponMessage: string  = 'Final coupon is normalizeCoupon(coupon)';
            
                console.log(couponMessage); // Final coupon is PIZZA25
                </code>
            </pre>
        </div>`,
    controller: function ($window) {
        stringTypes();
        window.highlightCode();
    }
};

angular
    .module('primitive')
    .component('stringType', stringType)
    .config(function ($stateProvider) {
        $stateProvider
            .state('primitive.stringType', {
                url: '/stringType',
                views: {
                    'details@primitive': {
                        component: 'stringType'
                    }
                }
            });
    });