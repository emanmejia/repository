////////////   METHOD 1 ////////////

const showMessage = () => {
  alert("Hello!");
};

// Access the button
const buttonElement = document.getElementById("myButton");
// Listen to the "click" event
buttonElement.addEventListener("click", showMessage);

// When someone clicks the "removeEvent" button, let's remove the above
// event handler
document.getElementById("removeEvent").addEventListener("click", () => {
  buttonElement.removeEventListener("click", showMessage);
})


////////////   METHOD 2 ////////////
// Concise syntax
// document.getElementById("myButton").addEventListener("click", () => {
//   alert("Hello Concise!");
// })

// With Method 2, you can't remove the event handler.
// So, let's uncomment method 1 and test removing the event handler