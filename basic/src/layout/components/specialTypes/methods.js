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
					<a ui-sref="special.voidType">Void type</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.neverType">Never type</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.nullUndefinedStrict">Null, Undefined, Strict Null checks</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.unionAndLiteralTypes">Union and Literal types</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.functionTypes">Function Types</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.optionalArgs">Functions and Optional Arguments</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.typedFunctions">Typed Functions and Default Params</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.objectTypes">Object Types</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.arrayTypesGenerics">Array Types and Generics</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="special.tupleTypesForArrays">Tuple Types for Arrays</a>
				</li>
			</ul>
		</div>
	`
};

angular.module("special").component("specialMethods", specialMethods);
