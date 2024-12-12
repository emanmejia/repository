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

// // Compute female student results
// const femaleStudentsResults = [];
// for (const student of students) {
//   if (student.sex === "f") {
//     let gradesSum = 0;
//     for (const grade of student.grades) {
//       gradesSum += grade;
//     }
//     const averageGrade = gradesSum / student.grades.length;
//     femaleStudentsResults.push({
//       name: student.name,
//       avgGrade: averageGrade
//     });
//   }
// }


const femaleStudentsResults = students.filter(student => student.sex === "f")
        .map(student => {
          return {
            name: student.name,
            avgGrade: student.grades.reduce((sum, x) => sum + x, 0) / student.grades.length
          }
        });

console.log(femaleStudentsResults);	

// How can we display the max score?
// Let's write a generic max function using the reduce array method.
// We will NOT use the built in Math.max method

// Test array
const testArray = [2, 5, 9, 1, 0, 14, 12, 6];

// Generic max function

// Rewritten below using the ternary opertor
const getMax = (arr) => arr.reduce((max, x) => {
  // Logic to compare each element to the max and return the max
  // Will rewrite this using ternary operator
  if (max > x) {
    return max;
  } else {
    return x;
  }
}
,arr[0]) //Set the initial value to the first element in the array

// Rewrite the above function using ternary operator
//const getMax = (arr) => arr.reduce((max, x) => (max > x) ? max : x ,arr[0]) //Set the initial value to the first element in the array


// Test the function
console.log(getMax(testArray));

// Now that we have a working function, we can use the function 
// or use the same code in the mapping.
// Let's reuse the function
//

const femaleStudentsResults2 = students.filter(student => student.sex === "f")
.map(student => {
  return {
    name: student.name,
    avgGrade: student.grades.reduce((sum, x) => sum + x, 0) / student.grades.length,
    maxGrade: getMax(student.grades)
  }
});

console.log(femaleStudentsResults2);	

// Note: We can also make generic function for sum and average
const getSum = (arr) => arr.reduce((sum, x) => sum + x, 0);

const getAverage = (arr) => getSum(arr) / arr.length;

// Let's refactor the code using the generic functions

const femaleStudentsResults3 = students.filter(student => student.sex === "f")
.map(student => {
  return {
    name: student.name,
    avgGrade: getAverage(student.grades),
    maxGrade: getMax(student.grades)
  }
});

console.log(femaleStudentsResults3);	