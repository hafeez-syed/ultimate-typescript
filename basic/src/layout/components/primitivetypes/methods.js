var primitiveMethods = {
    template: `
		<div>
			<ul>
				<li ui-sref-active="active-menu">
					<a ui-sref="primitive.numberType">Number Type</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="primitive.stringType">String Type</a>
				</li>
				<li ui-sref-active="active-menu">
					<a ui-sref="primitive.booleanType">Boolean Type</a>
				</li>
			</ul>
		</div>
	`
};

angular
    .module('primitive')
    .component('primitiveMethods', primitiveMethods);