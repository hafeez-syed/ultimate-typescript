window.TSNamespace = window.TSNamespace || {};

var angular = require("angular");
require("@uirouter/angularjs");
require("angular-sanitize");

angular.module("tsbasics", [
  "ui.router",
  "ngSanitize",
  "es67",
  "primitive",
  "special",
  "aliases",
  "interfaces",
  "classes"
]);
angular.module("es67", []);
angular.module("primitive", []);
angular.module("special", []);
angular.module("aliases", []);
angular.module("interfaces", []);
angular.module("classes", []);

var srcDir = "./components/";

// ES6&7
require(srcDir + "es67/config");
require(srcDir + "es67/methods");
require(srcDir + "es67/1-arrow-functions");
require(srcDir + "es67/2-default-function-params");
require(srcDir + "es67/3-object-literal");
require(srcDir + "es67/4-rest-params");
require(srcDir + "es67/5-array-spread-operator");
require(srcDir + "es67/6-destructuring-arrays-and-objects");

// Primitive Types
require(srcDir + "primitivetypes/config");
require(srcDir + "primitivetypes/methods");
require(srcDir + "primitivetypes/1-number-type");
require(srcDir + "primitivetypes/2-string-type");
require(srcDir + "primitivetypes/3-boolean-type");

// Special Types
require(srcDir + "specialTypes/config");
require(srcDir + "specialTypes/methods");
require(srcDir + "specialTypes/1-any-type");
require(srcDir + "specialTypes/2-implicit-explicit-types");
require(srcDir + "specialTypes/3-void-type");
require(srcDir + "specialTypes/4-never-type");
require(srcDir + "specialTypes/5-null-undefined-strict");
require(srcDir + "specialTypes/6-union-and-literal-types");
require(srcDir + "specialTypes/7-function-types");
require(srcDir + "specialTypes/8-function-optional-args");
require(srcDir + "specialTypes/9-typed-functions-and-default-params");
require(srcDir + "specialTypes/10-object-types");
require(srcDir + "specialTypes/11-array-types-generics");
require(srcDir + "specialTypes/12-tuple-types-for-arrays");

// Type Aliases and Assertions
require(srcDir + "aliases/config");
require(srcDir + "aliases/methods");
require(srcDir + "aliases/1-type-aliases");
require(srcDir + "aliases/2-type-assertions");

// Diving into Interfaces
require(srcDir + "interfaces/config");
require(srcDir + "interfaces/methods");
require(srcDir + "interfaces/1-creating-interfaces");
require(srcDir + "interfaces/2-interfaces-with-function-types");
require(srcDir + "interfaces/3-extending-interfaces");

// Classess, Properties and Inheritance
require(srcDir + "classes/config");
require(srcDir + "classes/methods");
require(srcDir + "classes/1-classes-and-constructors");
