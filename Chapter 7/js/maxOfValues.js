/* 
Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];

*/

// Create the array
const values = [3, 11, 7, 2, 9, 10];

console.log("Calculate the maxmium of following Values:")

// Using for-of loop to log each element
for (const value of values) {
  
  console.log(value);
}

// Use Math.max() to find the maximum value in the array
const maxValue = Math.max(...values);

// Display the maximum value
console.log("The maximum value in the array is:", maxValue);