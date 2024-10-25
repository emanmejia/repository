const words = [];
let input;

while (true) {
    input = prompt("Please enter a word (type 'stop' to finish):");
    
    // Check if the input is "stop" (case insensitive)
    if (input.toLowerCase() === "stop") {
        break; // Exit the loop
    }
    
    // Add the input to the array
    words.push(input);
}

// Display the results
if (words.length === 0) {
    console.log("No words to display, Stop was the first word entered.");
} else {
    console.log("You entered the following words:");
    words.forEach(word => console.log(word));
}
