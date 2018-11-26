var specialMethods = {
	template: `
		<div>
			<ul>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.anyType">The "Any" type</a>
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
				<li ui-sref-active="active-menu">
					<a ui-sref="special.null">Null, Undefined, Strict Null checks</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.union">Union and Literal types</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.functionr">Function Types</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.optional">Functions and Optional Arguments</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.default">Typed Functions and Default Params</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.object">Object Types</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.generics">Array Types and Generics</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.tuple">Tuple Types for Arrays</a>
				</li>
			</ul>
		</div>
	`
};

angular
	.module('special')
	.component('specialMethods', specialMethods);