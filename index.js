class Vehicle {
 constructor(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
 }

 calculateFuelEfficiency() {
  throw new Error(
   "Abstract method 'calculateFuelEfficiency' must be implemented in derived classes"
  );
 }

 get makeAndModel() {
  return `${this.make} ${this.model}`;
 }

 printYear() {
  console.log(`Manufactured in ${this.year}`);
 }

 get efficiencyInfo() {
  return "Efficiency information not available";
 }

 getTypeSpecificInfo() {
  throw new Error(
   "Abstract method 'getTypeSpecificInfo' must be implemented in derived classes"
  );
 }
}

class Car extends Vehicle {
 constructor(make, model, year, fuelEfficiency) {
  super(make, model, year);
  this.fuelEfficiency = fuelEfficiency;
 }

 calculateFuelEfficiency() {
  return this.fuelEfficiency;
 }

 get efficiencyInfo() {
  return `Fuel efficiency: ${this.fuelEfficiency} km per gallon`;
 }

 getTypeSpecificInfo() {
  return "Type: Car";
 }
}

class Motorcycle extends Vehicle {
 constructor(make, model, year, fuelEfficiency, hasSideCar) {
  super(make, model, year);
  this.fuelEfficiency = fuelEfficiency;
  this.hasSideCar = hasSideCar;
 }

 calculateFuelEfficiency() {
  return this.fuelEfficiency;
 }

 getTypeSpecificInfo() {
  return this.hasSideCar
   ? "Type: Motorcycle with sidecar"
   : "Type: Motorcycle without sidecar";
 }
}

function main() {
 const vehicles = [
  new Car("Toyota", "Camry", 2022, 30),
  new Motorcycle("Harley-Davidson", "Sportster", 2021, 50, false),
  new Car("Honda", "Civic", 2023, 35),
 ];

 for (const vehicle of vehicles) {
  vehicle.printYear();
  console.log(vehicle.makeAndModel);
  console.log(vehicle.calculateFuelEfficiency());
  console.log(vehicle.efficiencyInfo);
  console.log(vehicle.getTypeSpecificInfo());
  console.log("--------------------------");
 }
}

main();
