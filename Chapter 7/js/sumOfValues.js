/* 
Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2 9, 10];

*/

// Create the array
const values = [3, 11, 7, 2, 9, 10];
console.log("Calculate the sum of following Values:")
// Using for-of loop to log each element
for (const value of values) {
  
  console.log(value);
}

// Calculat ethe sum of the values in the array
let sum = 0;
for (let i = 0; i < values.length; i++) {
  sum += values[i];
}

// Show the sum
console.log("The sume of the value is:", sum);