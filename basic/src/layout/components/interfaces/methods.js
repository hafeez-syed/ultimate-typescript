var interfacesMethods = {
  template: `
		<div>
			<ul>
				<li ui-sref-active="active-menu">
					<a ui-sref="interfaces.creatingInterfaces">Creating Interfaces</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="interfaces.interfaceWithFunctionTypes">Interfaces with Function Types</a>
				</li>
			</ul>
		</div>
	`
};

angular.module("interfaces").component("interfacesMethods", interfacesMethods);
