// Define the calculator function
function calculator(number1, number2, operation) {
    let result;

    // Perform the operation based on the input
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            return 'Invalid operation';
    }

    // Return the formatted result
    return `${number1} ${operation} ${number2} = ${result}`;
}

// Prompt the user for input
const userInput = prompt("Enter two numbers and an operation separated by commas (e.g., 5, 3, +):");
const inputs = userInput.split(',').map(item => item.trim()); // Split and trim inputs

// Convert inputs to numbers and extract operation
const number1 = parseFloat(inputs[0]);
const number2 = parseFloat(inputs[1]);
const operation = inputs[2];

// Call the calculator function and display the result
const result = calculator(number1, number2, operation);
console.log(result);
