const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

// Increment the scores by 1 point.
// Several methods are illustrated
// Using traditional loops, forEach loops, and MAP

// Method 1 - Traditional for loop and increment each score by 1

// Iterate through the students
// Note that you need to keep track of the indices 
for (let i = 0; i < students.length; i++) {  // Can also use forEach on the outer loop
  // Iterate through the grades, increasing each by 1
  for (let j = 0; j < students[i].grades.length; j++) {
    students[i].grades[j]++
  }
}

// // Output the results - (see below using a generic function)
// students.forEach(student => {
//   console.log(`Name: ${student.name}, Sex: ${student.sex}`);
//   console.log(`Updated grades are: ${student.grades}`);
// })

// Since we'll ouput the results serveral times, let's create a generic output function:
// Generic output function
const output = (stuArray) => {
  stuArray.forEach(student => {
    console.log(`Name: ${student.name}, Sex: ${student.sex}`);
    console.log(`Updated grades are: ${student.grades}`);
  })
}

console.log("==== Method 1 ====");
output(students);

// Method 2 - Use the forEach loop with the index attribute in the inner loop

// No indices to keep track of
students.forEach((student) => {
  // Use the index attribute in the forEach loop (don't need to keep track of the index)
  student.grades.forEach((grade, idx) => {
    student.grades[idx] = grade + 1;
    // student.grades[idx]++;  // Can we use this?
    // grade++; // Can we use this?
  })
})

// Output the results - use generic output function
console.log("==== Method 2 ====");
output(students);

// Method 3 - Use the forEach loop with the index and array attributes in the inner loop
students.forEach((student) => {
  // Use the index and array attributes in the forEach loop 
  student.grades.forEach((grade, idx, arr) => {
    arr[idx] = grade + 1;
  })
})

// Output the results - use generic output function
console.log("==== Method 3 ====");
output(students);

// USE MAP

// When using MAP, we typically think of returning a new array
//  and not mutating the original array.
//  However, the original array can also be mutated.
//   Reference the following:
//   https://dev.to/lofiandcode/can-map-mutate-the-original-array-yes-dmb

// Method 4
//   Return results to a new array.  (This does not meet the requirements, but used for demonstration)
//   Cannot reassign the results to the students array (e.g. students = ...), since students is const.
//   So, using a new array newStudents
const newStudents = students.map(student => {
  // Returns a new student object
  return {
    name: student.name,
    sex: student.sex,
    grades: student.grades.map(grade => grade + 1) 
  }
  // Can use the spread operator instead of the above
  // return {...student, grades: student.grades.map(grade => grade + 1)}  
})

// Output the results - use generic output function
console.log("====== Method 4 - newStudents =======");
output(newStudents);

// Does runnng the above code mutate the orginal students array?
// No, you are not modifying the objects in the array and you are returning a new object.
// Test - Not necessary to rerun, but will rerun the code without assigning to a newStudents array
students.map(student => {
  // Returns a new student object (in this case, there is no variable to point to the returned object)
  return {
    name: student.name,
    sex: student.sex,
    grades: student.grades.map(grade => grade + 1)
  }
  // Can use the spread operator instead of the above
  // return {...student, grades: student.grades.map(grade => grade + 1)}  
})

// Output the results - use generic output function
console.log("====== Rerun - Students does not change =======");
output(students);

// Method 5 - Modify using MAP
// Can we change the students array?
//  Yes, we can modify each existing student object
//  No need to return anything

students.map(student => {
  student.grades = student.grades.map(grade => grade + 1); // Modify existing object
})

// Output the results - use generic output function
console.log("====== Method 5 - Rerun modifying the existing student objects =======");
output(students);


console.log("=====================  OTHER =====================");
// Other 
// Let's repeat the map method above, but assign the results to a new array.
// Need to return the updated object
const newStudents2 = students.map(student => {
  student.grades = student.grades.map(grade => grade + 1); // Modify existing object
  return student; // Without this, newStudents2 will have undefined elements
})

// Display the result
console.log("==== newStudents2 ====");
output(newStudents2);

// Display the original array
console.log("==== students ====");
output(students);

// Why did students change?  Let's perform a test to modify newStudents2

// Modify newStudents2
newStudents2[0].name = "Newname";
newStudents2[0].grades[0] = 0;

// Display the first element of both students and newStudents2

console.log("==== newStduents2 ====");
// To use our output function, we must send it an array
// Put the first element in an array
output([newStudents2[0]]);  

console.log("==== students ====");
output([students[0]]);

// Why did the name and grade change for the original students array?
// Both newStudents2 and students point to the same object.
// Discuss in class.
