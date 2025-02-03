// filter method is used to filter out elements from an array based on a condition.
//The filter method creates a new array with all elements that pass the test implemented by the provided function.
// Use cases of the filter method:
// Filtering out elements from an array based on a condition.
// Creating a new array with elements that pass the test implemented by the provided function.

const ages = [10, 20, 30, 35]
const over21 = ages.filter(function (age) {
  return age >= 21;
});

console.log(over21);


// Using Ternary Operator

const betterScores = [12.4, 45.5, 12.5, 24.6]
const passScore = 12.5;

const winScores = betterScores.filter((score) => score >= passScore) ? 'You win' : betterScores.filter((score) => score < passScore) ? 'You Lose' : 'Try again';

console.log(winScores); // Although the output is not correct, it is just to show how to use the ternary operator in the filter method.




const studentAges = [10, 20, 30, 35]

const over21Ages = (studentAges.filter((age) => age >= 21))
console.log(over21Ages);


// Example

const studentScores = [12.4, 45.5, 12.5, 24.6]
const passScores = 12.5;
const studentPassScores = studentScores.filter(function (score) {
  return score >= passScores;
});

console.log(studentPassScores);


// Example

const grades = [12.4, 45.5, 12.5, 24.6]

const passGrade = grades.filter((grade) => grade >= 12.5)

console.log(passGrade);

/***
 * Using function declaration _ 
 * const passGrade = grades.filter(function (grade) {
 * return grade >= 12.5;
 * });
 */


// Challenge: Create an array of children that are under 18 years old and use filter
// method to filter out children that are under 18 years old.

const children = [12, 14, 15, 10, 18, 20, 21]

const under18 = children.filter((child) => child < 18)

console.log(under18);


// Challenge

const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours : 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours : 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours : 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours : 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours : 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]

/*
Challenge:
1. Use the .filter() method to create an array
   of all of the thrillers.
*/

const thrillers = series.filter((series) => series.genres.includes('thriller'))

console.log(thrillers);

const newYorkSeries = series.filter((series) => series.location === 'New York');
console.log(newYorkSeries);

// Same as
/**
 * const newYorkSeries = series.filter(function (series) {
 *  return series.location === 'New York';
 * });
 * console.log(newYorkSeries);
 */