// Logic
// 1. Write function to increment count
// 2. ACTIVATE:
//    Add an event handler to the "myButton" button to call the increment function
// 3. DEACTIVATE:
//    Add an event handler to the "deactivate" button to deactivate "myButton" calling the increment function

// Increment Count function
// Logic:
// 1. Get the current count
//    How?
//    Get the clickCount element
// 2. Increment the count
// 3. Show the new count

const incrementCount = () => {
  const countElement = document.getElementById("clickCount");
  // Test
  //console.log("the count is: ", countElement.textContent);  
  const newCount = Number(countElement.textContent) + 1;
  //console.log("the count is: ", newCount);
  countElement.textContent = newCount;
}

// Test
//incrementCount();

// Activate count
//document.getElementById("myButton").addEventListener("click", incrementCount);
// Refactored above - Use a variable 
const myButtonElement = document.getElementById("myButton");
myButtonElement.addEventListener("click", incrementCount);

// Deactivate
document.getElementById("deactivate").addEventListener("click", () => {
  //document.getElementById("myButton").removeEventListener("click", incrementCount);
  // Since we are getting myButton multiple times, can modify the code
  // above to assign it to a varialbe and use the variable.
  // Refactored above
  myButtonElement.removeEventListener("click", incrementCount);
})

// Reactivate (must add a button)
document.getElementById("reactivate").addEventListener("click", () => {
  myButtonElement.addEventListener("click", incrementCount);
})