console.log("First console.log()");
console.log(
  fetch("https://raw.XXXgithubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
    .then(response => response.text()) // Access and return response's text content
    .then(text => {
      console.log("Second console.log() in fetch()", text); // Display file content in the console
    })
    .catch(err => {
      console.log("Error message: ", err.message);
    })

);
console.log("Third console.log()");
