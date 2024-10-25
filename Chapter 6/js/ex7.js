// Function to count vowels in a word
function countVowels(word) {
  const vowels = "aeiouy";
  let count = 0;
  for (let char of word.toLowerCase()) {
      if (vowels.includes(char)) {
          count++;
      }
  }
  return count;
}

// Function to check if a word is a palindrome
function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  return lowerCaseWord === reversedWord;
}

// Main program
const inputWord = prompt("Please enter a word:");

const vowelCount = countVowels(inputWord);
const palindromeCheck = isPalindrome(inputWord);

if (palindromeCheck) {
  console.log(`${inputWord} contains ${vowelCount} vowels and is a palindrome.`);
} else {
  console.log(`${inputWord} contains ${vowelCount} vowels and is not a palindrome.`);
}
