// Logic
// 1. Write a fucntion per the following:
//   Input: a color 
//   Process: change all the divs to that color
//
// 2. Add event handler for keypress
//    Check if R, Y, G, or B and pass to the function

// Function
const changeColor = (color) => {
  // Get all the divs
  const divElements = document.getElementsByTagName("div");
  // Loop
  Array.from(divElements).forEach(div => {
    div.style.backgroundColor = color;
  });
}

// Test the function
// changeColor("blue");

// Keypress event handler 
document.addEventListener("keypress", (e) => {
  // Test
  //console.log("The key pressed is: ", e.key);
  // Check if R, Y, G, or B pressed (let's use switch-case)
  switch (e.key.toLowerCase()) {
    case "r":
      changeColor("red");
      break;
    case "y":
      changeColor("yellow");
      break;
    case "g":
      changeColor("green");
      break;
    case "b":
      changeColor("blue");
      break;
    default: // Decided to default to original if none of the above are pressed
      changeColor("white");
  }
})