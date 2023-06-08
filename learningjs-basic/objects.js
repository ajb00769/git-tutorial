function Car(brand = "Ford", model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car("Ford", "Fiesta");

console.log(myCar);
console.log(myCar.brand);
console.log(myCar.model);

// primitives copy the value

let age = 36;
let myAge = age;
myAge = 37;
console.log(age);

// objects point to the memory location, doesnt create a copy of the original value

const car = {
  color: "blue",
};
const anotherCar = car;
anotherCar.color = "yellow";
console.log(car.color);
