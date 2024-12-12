// Fetch the languages
// Use split to put text in an array
// Loop
//   Create a LI
//   Set properties
//   Add to the UL

// Get UL Element
const ulElement = document.getElementById("languageList");


fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
  .then(response => response.text()) // Access and return response's text content
  .then(text => {
    // Test
    //console.log(text); // Display file content in the console
    // Declare an array
    const languages = text.split(";");
    // Loop
    languages.forEach(language => {
      // Test
      //console.log(language);
      // Create an LI and set properties
      const liElement = document.createElement("li");
      liElement.textContent = language;
      // Add to the UL (let's get the UL element outside the loop)
      ulElement.appendChild(liElement);
    })
  })
  .catch(err => {
    console.log("Error message: ", err.message);
  })