var aliases = {
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
  .module("aliases")
  .component("aliases", aliases)
  .config(function($stateProvider) {
    $stateProvider.state("aliases", {
      redirectTo: "aliases.typeAliases",
      url: "/aliases",
      views: {
        // default view
        "@": {
          component: "aliases"
        },
        "methods@aliases": {
          component: "aliasesMethods"
        }
      }
    });
  });
