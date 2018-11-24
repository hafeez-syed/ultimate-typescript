var thisMethods = {
    template: `
		<div>
			<ul>
				<li ui-sref-active="active-menu">
					<a ui-sref="this.arrowFunction">A "this" Keyword Primer</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="es67.defaultFunctionParameters">Exploring "this" with .call, .apply and .bind</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="es67.objectLiteral">Arrow Functions and Lexical Scope</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="es67.restParameters">Typing "this" and "noImplicitThis"</a>
				</li>
			</ul>
		</div>
	`
};

angular
    .module('this')
    .component('thisMethods', thisMethods);