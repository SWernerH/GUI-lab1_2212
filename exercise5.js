const vehecle = {
    wheels: 4,
    describe() {
        return `This vehicle has ${this.wheels} wheels.`;
    }
};

const car = Object.create(vehecle);
    car.make = "Ford";
    car.model = "Mustang";
    car.year = 2021;

console.log(Object.hasOwn(car, 'make'));
console.log(Object.hasOwn(car, 'wheels'));

console.log(car.wheels);
console.log(car.describe());