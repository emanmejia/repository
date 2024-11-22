const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
  radius: r,
  
  // Method to calculate circumference
  circumference: function() {
    return 2 * Math.PI * this.radius;
  },

  // Method to calculate area
  area: function() {
    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);



/*
Chapter 6/html/ex6.htm

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function calculateArea(radius) {
  return Math.PI * radius * radius;
}

// Prompt the user for the radius
let radius = prompt("Enter the radius:");

let circumference = calculateCircumference(radius);
let area = calculateArea(radius);

console.log("Circumference:", circumference);
console.log("Area:", area);
*/