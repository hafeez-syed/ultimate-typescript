var es67Methods = {
    template: `
		<div>
			<ul>
				<li ui-sref-active="active-menu">
					<a ui-sref="es67.arrowFunction">Arrow functions and implicit returns</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="es67.defaultFunctionParameters">Default Function parameters</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="es67.objectLiteral">Object literal improvement</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="es67.restParameters">Rest parameters</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="es67.arrayObjectSpread">Array and Object Spreads</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="es67.destructuringObjects">Destructuring Objects</a>
				</li>
			</ul>
		</div>
	`
};

angular
    .module('es67')
    .component('es67Methods', es67Methods);