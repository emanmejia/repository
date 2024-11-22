// String as sets of characters.
// You may think of a string as an array of characters.  Each character is identified by a number called an index, just as it does for an array.  THe same golden rules appl:

// - The index of the first character in a string is 0, not 1.
// - The highest index number is the string's length minus 1.

// You know how to identify a character by its index.  To access it, you use the brackets notation [] with the character index placed between brackets. 

// Trying to access a string character beyond the string length produces an `undefined` result.

const sport = "football";
console.log(sport[0]); // first letter "f"
console.log(sport[6]); // first "l" in word 
console.log(sport[8]); // undefined: last character is at index 7

// Now what if you want to access all string characters one-by one?  You could access each letter individually, as seen above:

const name = "Phinie" // Has 6 characters
console.log(name[0]); // "P"
console.log(name[1]); // "h"
console.log(name[2]); // "i"
console.log(name[3]); // "n"
console.log(name[4]); // "i"
console.log(name[5]); // "e"



// First approach using traditional for loop
const name1 = "Bobby";
console.log("Using traditional for loop:");
for (let i = 0; i < name1.length; i++) {
  console.log(name1[i]); // This will print each character of the string, one by one.
}


// Second approach using for...of loop
const name2 = "Emmanuel";
console.log("\nUsing for...of loop:");
for (const letter of name2) {
  console.log(letter);
}
