// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

// Create input and output variables and test
let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212.toFixed(2)} Celsius`);

// Test with 32 degrees Fahrenheit (No variables)
console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32).toFixed(2)} degrees Celsius`);

// Create a variable and test
let deg98pt7 = 98.7;
console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fahrenheitToCelsius(deg98pt7).toFixed(2)} degrees Celsius`);
