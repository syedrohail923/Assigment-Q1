//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function createCar(manufacturer, modelName, ...kwargs) {
    const car = {
      manufacturer: manufacturer,
      modelName: modelName,
    };
    for (let i = 0; i < kwargs.length; i += 2) {
      const key = kwargs[i];
      const value = kwargs[i + 1];
      car[key] = value;
    }
    return car;
  }
  const car = createCar("Toyota", "Supra", "color", "White", "optionalFeature", "Twin Turbo");
  console.log(car);