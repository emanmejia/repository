// Get the form element
const formElement = document.querySelector("form");

// Shows all user input and cancels form data sending
formElement.addEventListener("submit", e => {
  e.preventDefault(); // Cancel form data sending

  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;
  const email = e.target.elements.emailAddress.value;
  console.log(`Username: ${username}, password: ${password}, email: ${email}`);

  if (e.target.elements.confirmation.checked) {
    console.log("You asked for email confirmation");
  } else {
    console.log("You didn’t asked for email confirmation");
  }
  switch (e.target.elements.subscription.value) {
    case "newspromo":
      console.log("You are subscribed to newsletters and promotions");
      break;
    case "news":
      console.log("You are subscribed to newsletters only");
      break;
    case "no":
      console.log("You are not subscribed to anything");
      break;
    default:
      console.error("Unknown subscription code");
  }
  switch (e.target.elements.nationality.value) {
    case "US":
      console.log("Hello! You are a US citizen");
      break;
    case "FR":
      console.log("Bonjour! You are a French citizen");
      break;
    case "ES":
      console.log("Hola! You are a Spanish citizen");
      break;
    default:
      console.log("Your nationality is unknown");
  }
});

// Validate password length
document.getElementById("password").addEventListener("input", e => {
  const password = e.target.value; // Value of the password field
  let passwordLength = "too short";
  let messageColor = "red"; // Short password => red
  if (password.length >= 8) {
    passwordLength = "adequate";
    messageColor = "green"; // Long password => green
  } else if (password.length >= 4) {
    passwordLength = "moderate";
    messageColor = "orange"; // Moderate password => orange
  }
  const passwordHelpElement = document.getElementById("passwordHelp");
  passwordHelpElement.textContent = `Length: ${passwordLength}`; // helper text
  passwordHelpElement.style.color = messageColor; // helper text color
});


// Checking an email address once it's entered
document.getElementById("emailAddress").addEventListener("blur", e => {
  let emailAddressValidity = "";
  if (e.target.value.indexOf("@") === -1) {
    // the email address doesn’t contain @
    emailAddressValidity = "Invalid address";
  }
  document.getElementById("emailHelp").textContent = emailAddressValidity;
});
