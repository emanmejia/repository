// Anonymous function for retrieving and displaying a random beer
const grabRandomBrewery = () => {
  // Fetching random beer data from API
  fetch("https://api.openbrewerydb.org/v1/breweries/random")
    .then(response => response.json())
    .then(breweries => {
      // API returns an array containg only one element: we get it
      const brewery = breweries[0];
      // Creating DOM element for some beer properties
      const nameElement = document.createElement("h2");
      nameElement.textContent = brewery.name;
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = `Brewery type: ${brewery.brewery_type}`;
      // Quick method below vs. creating elements and appending
      //    That is, concatenated additional information using .innerHTML
      // Preferred approach is to create element, assign properties, and append
      //   See  ex6.js for using this approach. 
      descriptionElement.innerHTML += `</br>Location: 
          ${brewery.city}, ${brewery.state_province}. Phone: ${brewery.phone}`;  
          


      // Clear previous brewery data
      const breweryElement = document.getElementById("brewery");
      breweryElement.innerHTML = "";
      // Add brewery info to the page
      breweryElement.appendChild(nameElement);
      breweryElement.appendChild(descriptionElement);
    })
    .catch(err => {
      console.error(err.message);
    });
};

// Grab a new brewery when clicking the button
document.getElementById("grabButton").addEventListener("click", grabRandomBrewery);
