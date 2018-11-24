var specialMethods = {
    template: `
		<div>
			<ul>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.anyType">Any type</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.implicitExplicitTypes">Implicit vs Explicit Types</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.void">Void type</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.never">Never type</a>
				</li>
			</ul>
		</div>
	`
};

angular
    .module('special')
    .component('specialMethods', specialMethods);