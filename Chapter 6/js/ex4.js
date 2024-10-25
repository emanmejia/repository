const values = [3, 11, 7, 2, 9, 10];

let sum = 0;
let min = values[0];
let max = values[0];

// Iterate through the array
for (let i = 0; i < values.length; i++) {
    sum += values[i]; // Calculate sum

    // Update minimum value
    if (values[i] < min) {
        min = values[i];
    }

    // Update maximum value
    if (values[i] > max) {
        max = values[i];
    }
}

console.log(`Sum of all array values: ${sum}`);
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);
