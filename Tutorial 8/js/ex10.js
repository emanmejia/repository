// Logic
// Get the form element
// Add event handler for submit and another for reset

// SUMBIT
// Get value of num1 and num2
// Add them
// Display in label with id = "sum"


// Get the form element
const formElement = document.querySelector("form");

// Add event handler for submit
formElement.addEventListener("submit", (e) => {
  // Prevent default behavior (of submit)
  e.preventDefault();

  // Get values of num1 and num2
  const num1 = Number(e.target.elements.num1.value);
  const num2 = Number(e.target.elements.num2.value);

  // Test
  console.log(`Num1 = ${num1}.  Num2 = ${num2}`);

  // Get total
  const sum = num1 + num2;
  // Assign total to the label
  document.getElementById("sum").textContent = sum;
})

// Add event handler for rest
formElement.addEventListener("reset", (e) => {
  document.getElementById("sum").textContent = "";
})

// Validation
// Didn't write any validation code
// However, modified HTML: changed input from "text" to "number"
//   You may not be able to do this, but wanted to demonstrate "number" input
