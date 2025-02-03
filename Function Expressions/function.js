// Function expressions are often used as IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
// Function declarations are hoisted, but function expressions are not hoisted.

//* what is Function Expression?

// A function expression is similar to and has the same syntax as a function declaration
// One key difference is that function expressions can be anonymous and named.


//* Function Declaration

function getAmount(amount) {
  return `How much is my shopping amount? ${amount}`
}

console.log(getAmount(100)) // How much is my shopping amount? §{amount}

// Explain the above expression is function declaration

/*
Function Declaration:
It is defined using the function keyword, followed by the function name getAmount.
Function declarations are hoisted, meaning they can be called before they are defined in the code.
Example of Hoisting with Function Declarations
*/

//* What does it mean by hoisting?

/**
 * !Hoisting is a JavaScript mechanism where variables and function declarations are moved 
 * !to the top of their containing scope before code execution and it will work fine
 */

console.log(getAmount2(10)); // Works even before the function is declared

function getAmount2(amount) {
  return `How much is my shopping amount? ${amount}`;
}

// *Function Expression (Alternative)
// A function expression would look like this:

/*
Function Expression:
Assigned to a variable (getAmount).
Not hoisted, meaning it cannot be called before its declaration.
*/
const getAmount3 = function(amount) {
  return `How much is my shopping amount? ${amount}`;
};

console.log(getAmount3(100));

// Example of Function Expression

const getSpendAlert = function (amount) {
  return `You spent ${amount} on shopping?`;
}

console.log(getSpendAlert(500)); // you spent 100 on shopping



/**
 * ?Summary:
✅ Function Declaration:
✔ function getAmount() {...}
✔ Hoisted (can be used before its declaration)

✅ Function Expression:
✔ const getAmount = function() {...};
✔ Not hoisted (must be declared before use)
 * 
 */

//! Why to use Function Expression over Function declaration?

// Function expressions are often used as IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
// Function declarations are hoisted, but function expressions are not hoisted.
// Are easier to use and cleaner
// Chosen style of the dev team
 
//! The ability to call function declaration before it is declared can lead to bugs in the code.


//? Challenge: Convert this function declaration to a function expression

function getTheAlert(numberOfTransactionsHour) {
  if (numberOfTransactionsHour > 5) {
    return "You have exceeded the number of transactions per hour";

  }
}

console.log(getTheAlert(6)); // You have exceeded the number of transactions per hour


//? Solution:

const getTheAlert2 = function (numberOfTransactionsHour) {
  if (numberOfTransactionsHour > 15) {
    return "You have exceeded the number of transactions per hour";
  }
};

console.log(getTheAlert2(20)); // You have exceeded the number of transactions per hour



// The function keyword is used to define a function expression.
// The function is stored in a variable.
// The function can be invoked using the variable name.


