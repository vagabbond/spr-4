class Vehicle {
 constructor(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
 }

 // Абстрактний метод
 calculateFuelEfficiency() {
  throw new Error(
   "Abstract method 'calculateFuelEfficiency' must be implemented in derived classes"
  );
 }

 // Публічний метод
 getMakeAndModel() {
  return `${this.make} ${this.model}`;
 }

 // Захищений метод
 printYear() {
  console.log(`Manufactured in ${this.year}`);
 }
}

// Дочірній клас Car
class Car extends Vehicle {
 constructor(make, model, year, fuelEfficiency) {
  super(make, model, year);
  this.fuelEfficiency = fuelEfficiency;
 }

 // Реалізація абстрактного методу
 calculateFuelEfficiency() {
  return this.fuelEfficiency;
 }

 // Публічний метод
 getFuelEfficiency() {
  return `Fuel efficiency: ${this.fuelEfficiency} km per gallon`;
 }
}

// Дочірній клас Motorcycle
class Motorcycle extends Vehicle {
 constructor(make, model, year, fuelEfficiency, hasSideCar) {
  super(make, model, year);
  this.fuelEfficiency = fuelEfficiency;
  this.hasSideCar = hasSideCar;
 }

 // Реалізація абстрактного методу
 calculateFuelEfficiency() {
  return this.fuelEfficiency;
 }

 // Публічний метод
 hasSideCarInfo() {
  return this.hasSideCar ? "Has a sidecar" : "Does not have a sidecar";
 }
}

// Функція main
function main() {
 const vehicles = [
  new Car("Toyota", "Camry", 2022, 30),
  new Motorcycle("Harley-Davidson", "Sportster", 2021, 50, false),
  new Car("Honda", "Civic", 2023, 35),
 ];

 for (const vehicle of vehicles) {
  vehicle.printYear(); // Виклик захищеного методу
  console.log(vehicle.getMakeAndModel());
  console.log(vehicle.calculateFuelEfficiency());
  console.log("--------------------------");
 }
}

// Виклик функції main
main();
