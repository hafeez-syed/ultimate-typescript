var staticProperties = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Static Properties and Members</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  class Coupon {
                      static allowed = ["Tandoori", "Blazing Inferno"];
                  
                      static create(percentage: number) {
                        return "PIZZA_RESTAURANT_" + percentage;
                      }
                  }
                  
                  // We dont instantiate a class to access static properties or methods
                  console.log(Coupon.allowed); // ["Tandoori", "Blazing Inferno"]
                  console.log(Coupon.create(20)); // PIZZA_RESTAURANT_20
				</code>
			</pre>`;
    window.printAndHighlightCode("staticPropertiesAndMembers");
  }
};

angular
  .module("classes")
  .component("staticProperties", staticProperties)
  .config(function($stateProvider) {
    $stateProvider.state("classes.staticProperties", {
      url: "/staticProperties",
      views: {
        "details@classes": {
          component: "staticProperties"
        }
      }
    });
  });
