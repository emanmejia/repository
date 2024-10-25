// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

while (true) {
    // Prompt the user for a guess
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++; // Increment the attempt count

    // Check the guess and provide feedback
    if (guess < randomNumber) {
        console.log("Too low, guess again.");
    } else if (guess > randomNumber) {
        console.log("Too high, guess again.");
    } else {
        console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
        break; // Exit the loop when the guess is correct
    }
}
