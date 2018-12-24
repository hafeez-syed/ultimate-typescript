var aliasesMethods = {
  template: `
		<div>
			<ul>
				<li ui-sref-active="active-menu">
					<a ui-sref="aliases.typeAliases">Type Aliases</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="aliases.typeAssertions">Type Assertions</a>
				</li>
			</ul>
		</div>
	`
};

angular.module("aliases").component("aliasesMethods", aliasesMethods);
