var gettersSetters = {
  template: `<div ng-bind-html="myTemplate"></div>`,
  controller: function($scope) {
    $scope.myTemplate = `<h1>Setters and Getters [Accessors]</h1>
            <pre class="line-numbers language-typescript">
                <code class="language-typescript">
                  class Sizes {
                      constructor(public sizes: string[]) {
                      }
                  
                      get availableSizes() {
                        return this.sizes;
                      }
                  
                      set availableSizes(sizes: string[]) {
                        this.sizes = sizes;
                      }
                    }
                  
                    let sizes = new Sizes(["small", "medium"]);
                  
                    // getter
                    console.log(sizes.availableSizes); // ["small", "medium"]
                  
                    // setter
                    sizes.availableSizes = ["medium", "large"];
                  
                    // getter
                    console.log(sizes.availableSizes); // ["medium", "large"]
				</code>
			</pre>`;
    window.printAndHighlightCode("settersAndGetters");
  }
};

angular
  .module("classes")
  .component("gettersSetters", gettersSetters)
  .config(function($stateProvider) {
    $stateProvider.state("classes.gettersSetters", {
      url: "/gettersSetters",
      views: {
        "details@classes": {
          component: "gettersSetters"
        }
      }
    });
  });
