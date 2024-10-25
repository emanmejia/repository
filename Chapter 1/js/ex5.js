function analyzeArray(arr) {
  return {
      firstElement: arr[0],
      lastElement: arr[arr.length - 1],
      length: arr.length
  };
}

// Test the function with the provided examples
const result1 = analyzeArray([4, 8, 12, 5, 20]);
console.log(result1);

const result2 = analyzeArray(["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}]);
console.log(result2);
