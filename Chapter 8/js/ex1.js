// To obtain the length of a string (the number of characters it contains), add .length to it.  The length will be returned as an integer.

console.log("ABC".length); // 3
const str = "I am a string";
const len = str.length;
console.log(len); // 13

// Converting string case.

// You may conver a string's text to lowercase by calling the toLowerCase() method.  Alternatively, you may do the same with toUpperCase() to convert a string to uppercase.

const originalWord = "Bora-Bora";
console.log(originalWord);

const lowercaseWord = originalWord.toLowerCase();
console.log(lowercaseWord); // "bora-bora"

const uppercaseWord = originalWord.toUpperCase();
console.log(uppercaseWord); // "BORA-BORA"

// It's important to understand that once created, a string value never changes: strings are **immutable** in JavaScript.