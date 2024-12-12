const arrays = [[1, 4], [11], [3, 5, 7]];

// TODO: compute the value of the arraysSum variable


// METHOD 1

const arraysSum = arrays.reduce((acc, elem) => {
   // Get sum of array elements
   const arrSum = elem.reduce((sum, elem) => sum + elem, 0);
   return acc + arrSum 
  }
  , 0);

console.log(arraysSum); // Should show 31


// METHOD 2
// Let's create a function that sums up the array elements
const arraySum = (arr) => {
  return arr.reduce((sum, elem) => sum + elem, 0);
}

const arraysSum2 = arrays.reduce((acc, elem) => acc + arraysSum(elem), 0);
console.log(arraysSum2);


// sum = 0;
// sum += [1, 4];
// sum += [11];
// sum += [3, 5, 7];
// console.log(sum);