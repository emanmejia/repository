// Removing an element from an array.

// You can remove the last element of an array using the pop() method.

const movies = ["The Wolf of Wall Street", "Zootopia", "The Princess Bride"];
movies.pop(); // Removes last element or "The Princess Bride"
console.log(movies.length); // 2
console.log(movies[0]); // The Wolf of Wall Street
console.log(movies[1]); // Zootopia
console.log(movies[2]); // Undefined

// Alternatively, you can use the splice() method with two parameters: the first one is the index from which to begin removing, and the second one is the number of elements to remove.

const movies1 = ["The Wolf of Wall Street", "Zootopia", "The Princess Bride"];
movies1.splice(0, 1); // Removes 1 element starting at index 0
console.log(movies1.length); // 2
console.log(movies1[0]); // Zootopia
console.log(movies1[1]); // The Princess Bridge
console.log(movies1[2]); // Undefined
