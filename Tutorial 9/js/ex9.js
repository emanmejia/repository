// Add event handler for submitting form
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  // Testing key value pairs in formData using two methods
  formData.forEach((val, key) => {
    console.log(`key: ${key}, val: ${val}`);
  });

  for ([key, val] of formData.entries()) {
    console.log(`key: ${key} value: ${val}`);
  }


  fetch("https://thejsway-server.herokuapp.com/articles", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(text => {
      document.getElementById("feedback").textContent = text;
    })
})