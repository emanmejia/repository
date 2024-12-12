// Logic
// 1. Add event handler to form submit event
// 2. Get values for password1 and password2
// 3. Validation
//    a. Check for equality
//    b. Check for length
//    c. Check for at least one digit

// Event Handler
// concise syntax
document.querySelector("form").addEventListener("submit", (e) => {
  // Prevent default behavior
  e.preventDefault();

  // Get values for password1 and password2
  const password1 = e.target.elements.password1.value;
  const password2 = e.target.elements.password2.value;
  // Test
  //console.log(`Password1: ${password1}.  Password2: ${password2}`);

  // Validation
  // Get the password help element (since we'll provide feedback in that paragraph)
  const passHelpElement = document.getElementById("passwordHelp");
  passHelpElement.textContent = "";  // Clear out previous message

  // When writing the validation code, check the code as you write each valiation
  // We'll use regular expression to check for a digit.
  // Declare it below:
  const containsDigit = /[0-9]/;
  
  if (password1 !== password2) {  // Check for equality
    passHelpElement.textContent = "Error: passwords must be equal";
  } else if (password1.length < 6) {  // Check for length (only need to check one password since they are equal)
    passHelpElement.textContent = "Error: password must be at least 6 characters long";
  } else if (!containsDigit.test(password1)) { // Check for at least one digit
    passHelpElement.textContent = "Error: password must contain at least one digit";
  } else { // Default if the above pass to state that the password was successful
    passHelpElement.textContent = "Password sent successfully!";
  }
})