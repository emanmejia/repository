// Function to calculate the circumference of a circle
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

// Function to calculate the area of a circle
function calculateArea(radius) {
  return Math.PI * radius ** 2;
}

// Prompt the user for the radius
const userInput = prompt("Enter the radius of the circle:");
const radius = parseFloat(userInput);

// Validate the input
if (isNaN(radius) || radius <= 0) {
  console.log("Please enter a valid positive number for the radius.");
} else {
  // Calculate circumference and area
  const circumference = calculateCircumference(radius);
  const area = calculateArea(radius);

  // Display the results
  console.log(`For a circle with radius ${radius}:`);
  console.log(`Circumference = ${circumference.toFixed(2)}`);
  console.log(`Area = ${area.toFixed(2)}`);
}
