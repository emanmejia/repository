const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Pentel"
}; // The semicolon ";" is optional, but it is safer to add it. 

// Accessing an object's properties
console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

const car = {
    brand: "Subaru",
    make: "Impreza",
    type: "Wagon",
};

console.log(`I drive a ${car.brand} ${car.make} ${car.type}.`);

car.color = "Blue";

console.log(`My ${car.make} is ${car.color}.`)