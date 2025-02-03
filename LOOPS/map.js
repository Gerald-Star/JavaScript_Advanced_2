//* The map () method creates a new array populated with the results of calling a provided function on every element in the calling array.
// Use cases of Map Function
// The map() method is used to iterate over an array and manipulate or change data within the array.
// The map() method is used to transform the elements of an array into a new array.
// The map() method is used to apply a function to each element of the array.
// The map() method does not change the original array.
// The map() method does not execute the function for array elements without values.


const distanceWalked = [10, 20, 30, 40, 50]
const milesConversion = 1.2
const distanceWalkedInMiles = distanceWalked.map((distance) => {
  //console.log(distance)
  console.log(distance * milesConversion)
  return distance * 0.621371
})

//console.log(distanceWalkedInMiles) // unfortunately, this logs out [undefined, undefined, undefined, undefined, undefined]
// why is this happening?
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


// In which situations would you use the map() method?
// When you want to transform the elements of an array into a new array
// When you want to apply a function to each element of the array
// When you want to iterate over an array and manipulate or change data within the array

// How can I use map method in real life cases?
// You can use the map() method to convert an array of distances in kilometers to miles
// You can use the map() method to convert an array of temperatures in Celsius to Fahrenheit


const examGrades = [70, 60, 80, 90, 85]
const passingGrade = 70

const examResults = examGrades.map((grade, index) => {
  //return `Exam Grade: ${index} : ${grade * passingGrade}`
  return grade >= passingGrade ? 'Passed' : 'Failed'
})
console.log(examResults)

//! Using function to calculate the distance

const distanceKM = [10, 20, 30, 40, 45]
const KMConversion = 1.2

function convertToMiles() {
  return distanceKM.map(function (distance, index) {
    return `Monthly Distance: ${index} km, distance in miles: ${distance * KMConversion}`
  } )
}

console.log(convertToMiles())




// What are the differences between the map() method and the forEach() method?
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
// The map() method returns a new array
// The map() method does not change the original array

// The forEach() method executes a provided function once for each array element
// The forEach() method does not return anything
// The forEach() method does not change the original array
// The forEach() method does not execute the function for array elements without values
// The forEach() method is used when you want to perform the same operation on each element of an array
// The forEach() method is used when you want to iterate over an array and manipulate or change data within the array