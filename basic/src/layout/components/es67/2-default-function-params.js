var defaultFunctionParams = {
  template: `
		<div>
            <h1>Default Function Parameters</h1>
            <h3>ES5 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                function multiply(a, b) {
                    if(!a) {
                        a = 5;
                    }
                    if(!b) {
                        b = 25;
                    }
                    return a * b;
                }
                
                multiply(5) // 125
                </code>
            </pre>

            <h3>ES6 way</h3>
            <pre class="line-numbers language-javascript">
                <code class="language-javascript">
                function multiply(a = 2, b = 25) {
                    return a * b;
                }
                
                multiply() // 50
                </code>
            </pre>
        </div>`,
  controller: function() {
    window.printAndHighlightCode("defaultFunctionParameters");
  }
};

angular
  .module("es67")
  .component("defaultFunctionParams", defaultFunctionParams)
  .config(function($stateProvider) {
    $stateProvider.state("es67.defaultFunctionParameters", {
      url: "/defaultFunctionParameters",
      views: {
        "details@es67": {
          component: "defaultFunctionParams"
        }
      }
    });
  });
