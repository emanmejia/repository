// Logic
// When button is clicked (add event handler)
// 1. Get the UL
// 2. Create the LI
// 3. Change the text of the LI
// 4. Add the LI to the UL

// Commented the below code for METHOD 1 clicking on an liElement
// // Add event handler
// document.getElementById("addButton").addEventListener("click", (e) => {
//   // Get the UL
//   const ulElement = document.getElementById("desserts");
//   // Create and LI
//   const liElement = document.createElement("li");
//   // Set property
//   const dessertName = prompt("Please enter your favorite dessert");
//   liElement.textContent = dessertName;
//   // Add to the UL
//   ulElement.appendChild(liElement);
// })

// // Change the dessert name

// ///////////////  METHOD 1  ///////////////
// // Write event handler after the liElement was added
// // Need to know the target

// // Write an event handler on the UL to get the target
// // Can move the above ulElment outside the block or recreate
// document.getElementById("desserts").addEventListener("click", (e) => {
//   // Test
//   //console.log("target is: ", e.target, " textContent: ", e.target.textContent);
//   // Prompt for a new dessert
//   // Change the target textContent
//   const newDessert = prompt("What is the new dessert name?");
//   e.target.textContent = newDessert;
// })


///////////////  METHOD 2  ///////////////
// Add code to the element prior to adding it to the page
// In this case, add an event handler to the liElement prior to adding it to the UL

// I'll copy the above code and paste below (commented out above)

document.getElementById("addButton").addEventListener("click", (e) => {
  // Get the UL
  const ulElement = document.getElementById("desserts");
  // Create and LI
  const liElement = document.createElement("li");
  // Set property
  const dessertName = prompt("Please enter your favorite dessert");
  liElement.textContent = dessertName;
  
  // Add event handler to liElement
  liElement.addEventListener("click", () => {
    // Prompt for a new dessert
    const newDessert = prompt("Enter a new dessert name");
    // Set the newDesset to the textContenet
    liElement.textContent = newDessert;
  })

  // Add to the UL
  ulElement.appendChild(liElement);
})