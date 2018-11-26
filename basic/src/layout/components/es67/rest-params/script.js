var restParams = {
    template: `
		<div>
            <h1>Rest Parameters</h1>
            <h3>ES5 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                function sum(arr) {
                	return arr.reduce(function(prev, next) {
                		return prev + next;
                	});
                };
            	
            	var total = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            	console.log(total); // 55          	
                </code>
            </pre>

            <h3>ES6 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                function sum(..arr) {
                	return arr.reduce((prev, next) => prev + next);
                };
            	
            	var total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            	console.log(total); // 55
                </code>
            </pre>
        </div>`,
    controller: function ($window) {
        window.highlightCode();
    }
};

angular
    .module('es67')
    .component('restParams', restParams)
    .config(function ($stateProvider) {
        $stateProvider
            .state('es67.restParameters', {
                url: '/restParameters',
                views: {
                    'details@es67': {
                        component: 'restParams'
                    }
                }
            });
    });