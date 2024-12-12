const getUserInfo = () => {
  // Fetching random user data from API
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(users => {
      // API returns a user object
      //  We only need the first element in the result array 
      const user = users.results[0];
      // Test
      // console.log(user);
      // Creating DOM element for some beer properties
      const titleElement = document.createElement("h2");
      titleElement.textContent = "User Information";
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = `Name (last, first): ${user.name.last}, ${user.name.first}`;
      // create element, assign properties, and add to the paragraph
      // Can also append the HTML (less preferred)
      descriptionElement.appendChild(document.createElement("br"));
      descriptionElement.appendChild(document.createTextNode("Address:"));
      descriptionElement.appendChild(document.createElement("br"));
      descriptionElement.appendChild(document.createTextNode(`${user.location.street.number} ${user.location.street.name}`));
      descriptionElement.appendChild(document.createElement("br"));
      descriptionElement.appendChild(document.createTextNode(`${user.location.city}, ${user.location.state} ${user.location.postcode}`));
      descriptionElement.appendChild(document.createElement("br"));
      descriptionElement.appendChild(document.createTextNode(`${user.location.country}`))
      

      // Clear previous brewery data
      const userElement = document.getElementById("user");
      userElement.innerHTML = "";
      // Add brewery info to the page
      userElement.appendChild(titleElement);
      userElement.appendChild(descriptionElement);
    })
    .catch(err => {
      console.error(err.message);
    });
};

// Grab a new brewery when clicking the button
document.getElementById("getUser").addEventListener("click", getUserInfo);