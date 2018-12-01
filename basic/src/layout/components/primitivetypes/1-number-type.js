var numberType = {
    template: `<div ng-bind-html="myTemplate"></div>`,
    controller: function ($scope, $window) {
        $scope.myTemplate = `<h1>Number Type</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                let pizzaCost: number = 5;
                let pizzaToppings: number = 15;
            
                <em style="text-decoration: underline;">pizzaCost</em> = '100'; // Type ERROR: '100' is not assignable to type number
            
                function calculatePrice(cost: number, toppings: number): number {
                    return cost + 1.5 * toppings;
                }
            
                const cost: number  = calculatePrice(pizzaCost, pizzaToppings);
            
                console.log(cost); // 13
                </code>
            </pre>`;
        window.printAndHighlightCode('numberTypes');
    }
};

angular
    .module('primitive')
    .component('numberType', numberType)
    .config(function ($stateProvider) {
        $stateProvider
            .state('primitive.numberType', {
                url: '/numberType',
                views: {
                    'details@primitive': {
                        component: 'numberType'
                    }
                }
            });
    });