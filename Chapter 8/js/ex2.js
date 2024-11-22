// Comparing two strings.

// You may compare two stirngs with the === operator.  The oepration returns a boolean value: true if the strings are equal, false if not.

const word = "koala";
console.log(word); // koala 
console.log(word === "koala"); // true
console.log(word === "kangaroo"); // false

// String comparison is case sensitive. Do indeed pay attention to your lower and uppercase letters!

console.log("Qwerty");
console.log("Qwerty" === "qwerty"); // false
console.log("Qwerty".toLowerCase() === "qwerty"); // true