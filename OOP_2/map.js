// The map() method creates a new array populated with the results of calling
//a provided function on every element in the calling array.

/**!
 * Using the .map() method to iterate over arrays and mapping over arrays-
 * ? The map() method creates a new array populated with the results of calling
 * ? a provided function on every element in the calling array.
 * ! Frontend Developer Skills
 */

// Convert these miles to KM
const miles = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const km = miles.map(function (mile) {
  return mile * 1.60934;
});

console.log(km);

// Convert these miles to KM using arrow function

const distanceCovered = [5, 10, 15, 20, 25];
const distanceFactor = 1.5;
const distanceWalked = distanceCovered.map((distance) =>
  distance * distanceFactor
);

console.log(distanceWalked);

// Currency Exchange

const currency = [10, 20, 30, 40, 50]
const exchangeRate = 5.5;
const exchangeCurrency = currency.map((amount) =>
  amount * exchangeRate);

console.log(exchangeCurrency);

// The map gives us new arrays


// Using the map() method to iterate over arrays and mapping over arrays giving each index

const names = ['15', '30', '32', '35', '34']
const studentAvgScores = 35
const AvgScores = names.map((student, index) => {
  return `Text ${index}: ${student * studentAvgScores }`

});

console.log(AvgScores);


// using the map method to call the arrays without storing it in const using the callback function

const treadMillHrs = [4, 5, 6, 7, 8]
const treadMillSpeed = 5.5;

function treadMillsCovered() {
  return treadMillHrs.map(function (distanceCovered) {
    return (distanceCovered * treadMillSpeed);
  });
}

console.log(treadMillsCovered());


// Using the map method to call the arrays without storing it in const using the arrow function

const students = ['Jane', 'Mary', 'John', 'Joe', 'Jones']
const studentScores = 20;
const studentScoresAvg = students.map((student) => {
  return `${student} scored ${studentScores} marks`
});

console.log(studentScoresAvg);

//! Use the map method if you need to make use of the new array it returns
//! Use the forEach method if you don't need to need to create a new array.