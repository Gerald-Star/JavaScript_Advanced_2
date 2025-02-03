//? What is Arrow Function in JavaScript?

//? Arrow functions are a new way to write anonymous function expressions in JavaScript.
//  They are more concise and easier to read than traditional function expressions.

//? Arrow functions do not have their own this keyword.
//! They are not well suited for defining object methods.

//? Arrow functions are best suited for non-method functions.


// when to use brackets in arrow functions
/**
 * 1. When you have one parameter, you can omit the parentheses
 * 2. When you have multiple parameters, you need to include the parentheses
 * 3. When you have a single line of code, you can omit the curly braces
 * 4. When you have multiple lines of code, you need to include the curly braces
 * 5. When you have a single line of code that returns a value, you can omit the return keyword
 * 6. When you have multiple lines of code, you need to include the return keyword
 */

//? Example of Arrow Function

const getAmount = (amount) => {
  return `You have spent ${amount} on shopping`;
 };

console.log(getAmount(100)); // You have spent 100 on shopping
 
//? Example of Arrow Function with one parameter

const getAmount2 = amount => {
  return `You have spent ${amount} on shopping`;
};

console.log(getAmount2(200)); // You have spent 200 on shopping

//? Example of Arrow Function with multiple parameters

const getAmount3 = (amount, currency) => {
  return `You have spent ${amount} ${currency} on shopping`;
};

console.log(getAmount3(300, 'USD')); // You have spent 300 USD on shopping

//? Example of Arrow Function with a single line of code

const getAmount4 = amount => `You have spent ${amount} on shopping`;

console.log(getAmount4(400)); // You have spent 400 on shopping

//? Example of Arrow Function with multiple lines of code

const getAmount5 = amount => {
  const tax = 0.1;
  return `You have spent ${amount * tax} on shopping`;
}

console.log(getAmount5(500)); // You have spent 50 on shopping

//? Example of Arrow Function with a single line of code that returns a value

const getAmount6 = amount => amount * 0.1;

console.log(getAmount6(600)); // 60

//? Example of Arrow Function with multiple lines of code that returns a value

const getAmount7 = amount => {
  const tax = 0.1;
  return amount * tax;
}

console.log(getAmount7(700)); // 70

//? Arrow Function with multiple parameters

const getAmount8 = (amount, tax) => amount * tax;

console.log(getAmount8(800, 0.1)); // 80

//? Arrow Function with no parameters

const getAmount9 = () => 100;

console.log(getAmount9()); // 100


// Challenge: create this to arrow function
function speedWarning(speed) {
  return ` You are driving at ${speed} km/h. Slow down!`;
}

console.log(speedWarning(100)); // You are driving at 100 km/h. Slow down!

// Solution:

const speedWarning2 = speed => ` You are driving at ${speed} km/h. Slow down!`;

console.log(speedWarning2(120)); // You are driving at 120 km/h. Slow down!


// Having multiple parameters in arrow function

// Challenge: create this to arrow function
 const speedWarning = (speed, maxSpeed) => {
  if (speed > maxSpeed) {
    return ` You are driving at ${speed} km/h. Slow down!`;
 }
}
  console.log(speedWarning(100, 80)); // You are driving at 100 km/h. Slow down!