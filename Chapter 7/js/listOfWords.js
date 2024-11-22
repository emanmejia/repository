/* 
Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

*/

// Initialize an empty array to store the words
let words = [];

// Start an infinite loop to ask the user for a word
while (true) {
  // Ask the user for a word
  let word = prompt("Enter a word (type 'stop' to finish):");

  // Check if the user typed "stop" to exit the loop
  if (word === "stop") {
    break; // Exit the loop if the word is "stop"
  }

  // Add the word to the array if it's not "stop"
  words.push(word);
}

// Show all the words entered by the user except "stop"
console.log("You entered the following words:");
for (let i = 0; i < words.length; i++) {
  console.log(words[i]);
}