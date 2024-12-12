// Show information on a keyboard event
const keyboardInfo = e => {
  //console.log("Event is: ", e);  // For testing
  // Added e.key below
  console.log(`Keyboard event: ${e.type}, keyCode: ${e.keyCode}, character: ${e.key}`);
};

// Integrate this function into key press and release:
document.addEventListener("keydown", keyboardInfo);
document.addEventListener("keyup", keyboardInfo);
