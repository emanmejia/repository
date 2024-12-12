// Define an array containing two objects
const planes = [
  {
    manufacturer: "Airbus",
    model: "A320"
  },
  {
    manufacturer: "Boeing",
    model: "737"
  }
];
console.log(planes); // Display the array of objects

const planesText = JSON.stringify(planes);
console.log(planesText); // Display the array as a JSON string

console.log(JSON.parse(planesText)); // Display the array of objects
