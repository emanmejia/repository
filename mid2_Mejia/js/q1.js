// Mejia, Emmanuel - Midterm 2
// Date Nov 7 2024

// Employee Objects
const employees = [
  { name: "Alan", examScores: [] },
  { name: "Betty", examScores: [] },
  { name: "Cindy", examScores: [] },
  { name: "Dana", examScores: [] },
  { name: "Ellen", examScores: [] },
  { name: "Frank", examScores: [] },
  { name: "Glenda", examScores: [] },
  { name: "Hank", examScores: [] }
];

// PART I - Generate Scores
function genScores(employee) {
  while (true) {
    // Generate a random score between 50 and 100
    const score = Math.floor(Math.random() * 51) + 50;
    employee.examScores.push(score);
    if (score >= 90) break;
  }
}

// Populate scores for each employee
employees.forEach(genScores);

// Check results for Part I
console.log("PART I - Populated Exam Scores");
console.log(employees);

// PART II
function dropLowest(employee) {
  if (employee.examScores.length > 1) {
    employee.examScores.sort((a, b) => a - b);
    employee.examScores.shift();
  }
}
// Drop the lowest score for each employee
employees.forEach(dropLowest);

// Check results for Part II
console.log("PART II - Exam Scores After Dropping the Lowest Score");
console.log(employees);

// PART III Summary
function summarizeEmpData(employee) {
  const numberOfTests = employee.examScores.length;
  const passingScore = Math.max(...employee.examScores); 
  const avgScore = employee.examScores.reduce((sum, score) => sum + score, 0) / numberOfTests;
  const minScore = Math.min(...employee.examScores);  // Min score in the examScores array

  return {
    name: employee.name,
    examScores: employee.examScores,
    numberOfTests,
    passingScore,
    avgScore,
    minScore
  };
}

const summarizedData = employees.map(summarizeEmpData);

// Check Part III
console.log("PART III - Summary Data");
console.log(summarizedData);

// PART IV - Output esults
summarizedData.forEach(employee => {
  console.log(`Name: ${employee.name}`);
  console.log(`Exam Scores: ${employee.examScores.join(", ")}`);
  console.log(`Number of tests: ${employee.numberOfTests}`);
  console.log(`Passing Score: ${employee.passingScore}. Average Score: ${employee.avgScore.toFixed(2)}. Min Score: ${employee.minScore}`);
  console.log("*********************************************************");
});
