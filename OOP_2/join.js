// join() method joins the elements of an array into a string, and returns the string.
// Use Cases of the join() method:
//  * Joining elements of an array into a string.
//  * Converting an array to a string.

const guestNames = ['John', 'Jane', 'Doe', 'Smith', 'Doe'];
const guestList = guestNames.join(' '); //

console.log(guestList);

// You can use the join method and map method to join the elements of an array into a string.
// Foreach does not return a ew array, it returns undefined

//! Use the map method if you need to make use of the new array it returns
//! Use the forEach method if you don't need to need to create a new array.