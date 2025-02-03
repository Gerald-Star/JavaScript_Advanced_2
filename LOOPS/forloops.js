//* What is Loops?
/***  Loops are used to repeat a block of code.
 Loops are handy, if you want to run the same code over and over again, each time with a different value.
 There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.
*/

//* Types of Loops
/***  1. for loop
 2. while loop
 3. do while loop
 4. for in loop
 5. for of loop
*/




// 1. for  of loop
/**
 * Challenge 1: Iterate over this array using a for of loop to access each character
 */
const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

for (const character of characters) {
  console.log(character.powers)
}

for (const character of characters) {
  console.log(character.powers[0])
}

for (const character of characters) {
  for (const power of character.powers) {
  console.log(power)
}
} // this logs out all the powers of all the characters in the array



for (const character of characters) {
  console.log(character.title)
}


//* 2. for in loop
/**
 * Challenge 1: Iterate over the object and log the value of the properties
 */

const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63
  }
}

for (let property in student) {
  console.log(student[property])
}

const family = {
  mother: 'Jane',
  father: 'John',
  daughter: 'Sally',
}

for (let member in family) {
  console.log(family[member])
}

//! for ..of and for ..in loops are used to iterate over arrays and objects respectively
//! Arrays are iterable objects, which means they have a Symbol.iterator property, which is a function that returns an iterator object
//! Objects are not iterable, so you can't use a for ..of loop to iterate over them

// ? for..in loop is used to iterate over the properties key of an object

// ? for..of loop is used to iterate over the values of an iterable object like  examples an arrays, strings, maps, sets, etc