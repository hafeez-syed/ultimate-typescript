var interfaces = {
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
  .module("interfaces")
  .component("interfaces", interfaces)
  .config(function($stateProvider) {
    $stateProvider.state("interfaces", {
      redirectTo: "interfaces.creatingInterfaces",
      url: "/interfaces",
      views: {
        // default view
        "@": {
          component: "interfaces"
        },
        "methods@interfaces": {
          component: "interfacesMethods"
        }
      }
    });
  });
