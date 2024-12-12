// Question:
// What if I am given a multi-dimentional array (dimension unknown)
//  and I want to compute the sum of all the individual elements?

// You can use recursion to do this.

// See below

// Create a function with input of array
const sumArrElements = (arr) => {
  let sum = 0;  // Declare the sum and initialize it to 0
  
  // Overview:
  // You will iterate through each element of the array
  // If the element is an integer, add it to the sum
  // If it is an array, iterate through each element of this array
  //   repeat the logic

  // Create a function that will accept an array element
  // Recall, this can be an integer or another array
  // 
  const recursive = (val) => {  
    if (Number.isInteger(val)) {   // If it is an integer, add it to the sum
      sum += val
    } else {                       // Otherwise, iterate through each element and pass it to the recursive function
      val.forEach(elem => {
        recursive(elem);
      });
    }
  
  }

  recursive(arr);  // Call the recursive function with the input array
  return sum;      // Return the sum
}

// test Array
const anArray = [[4, 6], [1, [3, 3, 4], 3, 6], [3, [1, 2, 3, 4, [2, 3, 5]], 7]];

// Output the result
console.log(sumArrElements(anArray));