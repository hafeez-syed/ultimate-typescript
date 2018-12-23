const arrayTypesGenerics = function() {
  console.log("... 11: Array Types and Generics ...");

  let sizes: number[];
  sizes = [1, 2, 3];

  let toppings: Array<string>;
  toppings = ["tomato", "olive", "pineapple"];

  console.log(`Array type number[]: ${sizes}`);

  console.log(`Generic type Array<string>: ${toppings}`);
};

window.TSNamespace.arrayTypesGenerics = arrayTypesGenerics;
