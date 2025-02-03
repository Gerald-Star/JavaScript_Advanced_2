import { studentArr } from './studentArr.mjs';

function calculateClassAverage(studentArr) {
  const totalGrades = studentArr.reduce((total, currentStudent) => {
    return total + currentStudent.grades;

  }, 0)
  return totalGrades / studentArr.length;
}

console.log(calculateClassAverage(studentArr));


function calculateClassAvg(studentArr) {
  const totalMarks = studentArr.reduce((total, currentStudent) => {
    return total + currentStudent.marks;
  }, 0)
  return totalMarks / studentArr.length;
}

console.log(calculateClassAvg(studentArr));