var angular = require('angular');
require('@uirouter/angularjs');
require('angular-sanitize');

angular
    .module('tsbasics', [
        'ui.router',
        'ngSanitize',
        'es67',
        'primitive',
        'special',
        'aliases',
        'enums',
        'interfaces',
        'classes',
        'generics'
    ]);
angular
    .module('es67', []);
angular
    .module('primitive', []);
angular
    .module('special', []);
angular
    .module('aliases', []);
angular
    .module('enums', []);
angular
    .module('interfaces', []);
angular
    .module('classes', []);
angular
    .module('generics', []);

var srcDir = './components/';

// ES6&7
require(srcDir + 'es67/config');
require(srcDir + 'es67/methods');
require(srcDir + 'es67/arrow-functions/script');
require(srcDir + 'es67/default-function-params/script');
require(srcDir + 'es67/object-literal/script');
require(srcDir + 'es67/rest-params/script');
require(srcDir + 'es67/array-spread-operator/script');
require(srcDir + 'es67/destructuring-arrays-and-objects/script');

// Primitive Types
require(srcDir + 'primitivetypes/config');
require(srcDir + 'primitivetypes/methods');
require(srcDir + 'primitivetypes/number-type/script');
require(srcDir + 'primitivetypes/string-type/script');
require(srcDir + 'primitivetypes/boolean-type/script');

// Special Types
require(srcDir + 'specialTypes/config');
require(srcDir + 'specialTypes/methods');
require(srcDir + 'specialTypes/any-type/script');