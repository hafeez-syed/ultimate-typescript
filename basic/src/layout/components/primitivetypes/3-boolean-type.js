var booleanType = {
  template: `
		<div>
		    <h1>Boolean Type</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                const pizzas: number = 5;
            
                function offerDiscount(orders: number): boolean {
                    return orders >= 3;
                }
            
                if(offerDiscount(pizzas)) {
                    console.log('You are entitled for a discount!');
                } else {
                    console.log('Order more than 2 pizzas for a discount!');
                }
                </code>
            </pre>
        </div>`,
  controller: function() {
    window.printAndHighlightCode("booleanTypes");
  }
};

angular
  .module("primitive")
  .component("booleanType", booleanType)
  .config(function($stateProvider) {
    $stateProvider.state("primitive.booleanType", {
      url: "/booleanType",
      views: {
        "details@primitive": {
          component: "booleanType"
        }
      }
    });
  });
