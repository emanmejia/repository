// Ask the user for a word
let word = prompt("Enter a word:");

// Calculate word info
let wordLength = word.length;
let wordLower = word.toLowerCase();
let wordUpper = word.toUpperCase();

// Count the number of vowels
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
        vowelCount++;
    }
}

// Reverse the word
let wordReversed = word.split('').reverse().join('');

// Check if the word is a palindrome
// Remove spaces, convert to lowercase, and compare with its reverse
let normalizedWord = word.replace(/\s+/g, '').toLowerCase();
let isPalindrome = normalizedWord === normalizedWord.split('').reverse().join('');

// Display the word information
console.log("Word Length:", wordLength);
console.log("Lowercase Version:", wordLower);
console.log("Uppercase Version:", wordUpper);
console.log("Number of Vowels:", vowelCount);
console.log("Reversed Word:", wordReversed);
console.log("Is Palindrome:", isPalindrome ? "Yes" : "No");
