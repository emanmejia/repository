let number;

do {
  number = parseInt(prompt("Enter a number:"));
} while (number < 50 || number > 100);

console.log(`You entered a valid number: ${number}`);