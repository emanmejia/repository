const anArray = [];
for (i = 1; i <= 12; i++) {
    anArray.push(i);
}

// Discuss map, filter, and reduce

// Demonstrate using global functions

////////////////////////////////////////////////////////////////
// FILTER - Use the filter method to filter for even numbers

// Create a function that takes a number and returns 
// true if the number is even
// false otherwise
const isEven = (num) => {
  // if (num % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Or using ternary operator
  return (num % 2 === 0) ? true : false;
}

// Use the function to filter
const evenNumbers = anArray.filter(x => isEven(x));
console.log(evenNumbers);  //[2, 4, 6, 8, 10, 12]

// Recall, we used the following:
// const evenNumbers = anArray.filter(x => x % 2 === 0);

////////////////////////////////////////////////////////////////
// MAP - Use the map method to map a number to the number multiplied by 3

// Create a function that takes a number and returns 3 * number

const multiplyBy3 = (num) => 3 * num;  // Used short syntax

// Use the function to map
const multipBy3 = anArray.map(x => multiplyBy3(x));
console.log(multipBy3); //[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36]

// Recall, we used the following:
// const multipBy3 = anArray.map(x => x * 3);

////////////////////////////////////////////////////////////////
// REDUCE - Use the reduce method to get the sum of all the numbers in the array

// Function that takes two numbers and returns the sum:


const increment = (sum, inc) => {
  return (sum + inc)
};

const arraySum = anArray.reduce((total, elem) => increment(total, elem), 0);
console.log(arraySum); //78

// Recall, we used the following:
// const arraySum = anArray.reduce((sum, x) => sum + x, 0);



