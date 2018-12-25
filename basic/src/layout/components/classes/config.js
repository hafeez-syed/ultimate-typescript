var classes = {
  template: `
		<div class="layout">
			<div class="layout-methods">
				<div ui-view="methods"></div>
			</div>
			<div class="layout-details" ui-view="details"></div>
		</div>
    `,
  controller: function() {}
};

angular
  .module("classes")
  .component("classes", classes)
  .config(function($stateProvider) {
    $stateProvider.state("classes", {
      redirectTo: "classes.constructor",
      url: "/classes",
      views: {
        // default view
        "@": {
          component: "classes"
        },
        "methods@classes": {
          component: "classesMethods"
        }
      }
    });
  });
