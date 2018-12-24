var classesMethods = {
  template: `
		<div>
			<ul>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.constructor">Understanding Classes and Constructors</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.functionTypes">Interfaces with Function Types</a>
				</li>
			</ul>
		</div>
	`
};

angular.module("classes").component("classesMethods", classesMethods);
