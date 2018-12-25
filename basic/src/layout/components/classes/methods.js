var classesMethods = {
  template: `
		<div>
			<ul>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.constructor">Understanding Classes and Constructors</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.publicPrivateMembers">Public and Private Members</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.readOnlyMembers">Readonly Members</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.gettersSetters">Setters and Getters [Accessors]</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.classInheritance">Class Inheritance</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.abstrctClasses">Abstract Classes</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.protectedMembers">Protected Members and Inheritance</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.contractsAndImplements">Interface contracts and "implements"</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="classes.staticProperties">Static Properties and Members</a>
				</li>
			</ul>
		</div>
	`
};

angular.module("classes").component("classesMethods", classesMethods);
