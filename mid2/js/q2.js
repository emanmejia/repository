// Mejia, Emmanuel - Midterm 2
// Date Nov 7 2024

// Main problem I am having is showing options when I choose one versus the other.  

// Given the following Array of employee objects
const employees = [
  { firstName: 'Amy', lastName: 'Adams', countries: ['Aruba', 'Australia', 'Argentina'], numberOfCountries: 3, numberOfTravelers: 4, totalCost: 32500 },
  { firstName: 'Beth', lastName: 'Anderson', countries: ['Belize', 'Belgium', 'Barbados', 'Belarus'], numberOfCountries: 4, numberOfTravelers: 5, totalCost: 41000 },
  { firstName: 'Chuck', lastName: 'Choi', countries: ['Canada', 'Cambodia', 'Cameroon'], numberOfCountries: 3, numberOfTravelers: 2, totalCost: 16300 },
  { firstName: 'Dave', lastName: 'Chambers', countries: ['Denmark'], numberOfCountries: 1, numberOfTravelers: 1, totalCost: 4250 },
  { firstName: 'Eric', lastName: 'Edelman', countries: ['Ecuador', 'Egypt', 'El Salvador'], numberOfCountries: 3, numberOfTravelers: 2, totalCost: 19750 },
  { firstName: 'Fran', lastName: 'Edison', countries: ['Finland', 'France'], numberOfCountries: 2, numberOfTravelers: 3, totalCost: 23500 },
  { firstName: 'Gina', lastName: 'Gonzalez', countries: ['Germany', 'Greece'], numberOfCountries: 2, numberOfTravelers: 4, totalCost: 26000 },
  { firstName: 'Henry', lastName: 'Heart', countries: ['Hungary'], numberOfCountries: 1, numberOfTravelers: 1, totalCost: 3250 }
];

// Given the following array of total cost options (used to populate drop down list options)
const totalCostOptions = [10000, 20000, 30000, 999999];

// Populate drop-down options
const totalCostSelect = document.getElementById('totalCost');
totalCostOptions.forEach(cost => {
  const option = document.createElement('option');
  option.value = cost;
  option.textContent = `Less than or equal to $${cost}`;
  totalCostSelect.appendChild(option);
});

// Function to display employee records in a table
function displayResults(filteredEmployees) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  // If no employees match the criteria, display an error message
  if (filteredEmployees.length === 0) {
    resultsDiv.innerHTML = '<p style="color:red; font-weight:bold;">This DOES NOT match the given criteria.</p>';
    return;
  }

  // Create a table for displaying results
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  // Table header
  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  headerRow.style.backgroundColor = 'lightgray';
  const headers = ['First Name', 'Last Name', 'Countries', 'Number of Countries', 'Number of Travelers', 'Total Cost'];
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    th.style.border = '1px solid black';
    th.style.padding = '5px';
    headerRow.appendChild(th);
  });

  // Table body
  const tbody = table.createTBody();
  filteredEmployees.forEach(employee => {
    const row = tbody.insertRow();

    // Set background color based on the total cost
    let backgroundColor = '';
    if (employee.totalCost <= 10000) {
      backgroundColor = 'lightgreen';
    } else if (employee.totalCost > 10000 && employee.totalCost <= 20000) {
      backgroundColor = 'lightblue';
    } else if (employee.totalCost > 20000 && employee.totalCost <= 30000) {
      backgroundColor = 'yellow';
    } else {
      backgroundColor = 'lightcoral';
    }

    row.style.backgroundColor = backgroundColor;

    // Add employee data to row
    const data = [
      employee.firstName,
      employee.lastName,
      employee.countries.join(', '),
      employee.numberOfCountries,
      employee.numberOfTravelers,
      `$${employee.totalCost}`
    ];

    data.forEach(item => {
      const cell = row.insertCell();
      cell.textContent = item;
      cell.style.border = '1px solid black';
      cell.style.padding = '5px';
    });
  });

  resultsDiv.appendChild(table);
}

// Display records based on the last name entered
document.getElementById('btnDisplay').addEventListener('click', function () {
  const lastNameInput = document.getElementById('lName').value.trim().toLowerCase();
  if (!lastNameInput) {
    document.getElementById('results').innerHTML = '<p style="color:red; font-weight:bold;">Last name NOT entered!</p>';
    return;
  }

  const filteredByName = employees.filter(employee => employee.lastName.toLowerCase().startsWith(lastNameInput));
  displayResults(filteredByName);
});

// Display records based on the selected total cost
totalCostSelect.addEventListener('change', function () {
  const selectedCost = parseInt(this.value);
  if (selectedCost === '') {
    displayResults([]); // Clear the results if no total cost is selected
    return;
  }

  const filteredByCost = employees.filter(employee => employee.totalCost <= selectedCost);
  displayResults(filteredByCost);
});
