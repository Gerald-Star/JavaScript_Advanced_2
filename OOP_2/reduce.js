//* reduce() method is used to reduce the array to a single value.
/** The reduce method takes a callback function with two parameters, 
accumulator and currentValue.The accumulator is the value that is returned by the callback function. 
The currentValue is the current value being processed in the array.


Use cases of the reduce method:
Summing up the values in an array.
Finding the maximum value in an array.
Finding the minimum value in an array.
Finding the average value in an array.
Converting an array to an object.
Converting an array to a string.

*/

const timeStamps = [10, 20, 30, 20, 50]

const sum = timeStamps.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);

// Example

const numbers = [10, 20, 30, 40, 50]
const sumNumbers = numbers.reduce(function (total, num) {
  return total + num
});

console.log(sumNumbers)

// Using reduce method Finding the maximum value in an array.

const maxNumber = numbers.reduce(function (max, num) {
  if (num > max) {
    return num;
  } else {
    return max;
  }
});

console.log(maxNumber);

// Using reduce method Finding the minimum value in an array.

const minNumber = numbers.reduce(function (min, num) {
  return num < min ? num : min;
});

console.log(minNumber);

// Find the total sum and get the average of the numbers in the array

const grades = [5, 6, 7, 8, 9, 2, 10, 13, 14]

const totalGrades = grades.reduce((total, grade) => {
  return total + grade;
});

console.log(`The class average is ${totalGrades / grades.length}`);