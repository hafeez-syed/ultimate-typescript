const typeAssertions = function() {
  console.log("... 2: Type Assertions ...");

  type Pizza = { name: string; toppings: number };

  const pizza: Pizza = { name: "Blazing Inferno", toppings: 5 };

  const serialzed = JSON.stringify(pizza);

  function getNameFromJSONOldWay(obj: string): string {
    return (<Pizza>JSON.parse(obj)).name;
  }

  function getNameFromJSONNewWay(obj: string): string {
    return (JSON.parse(obj) as Pizza).name;
  }

  console.log(`OLD WAY: (<Type>object): ${getNameFromJSONOldWay(serialzed)}`);

  console.log(`NEW WAY: (object as Type) ${getNameFromJSONNewWay(serialzed)}`);
};

window.TSNamespace.typeAssertions = typeAssertions;
