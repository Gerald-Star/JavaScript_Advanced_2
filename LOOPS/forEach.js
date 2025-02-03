//! forEach() method executes a provided function once for each array element.
// When is forEach used?
// forEach() is used when you want to perform the same operation on each element of an array.
// forEach() does not return anything.
// forEach() does not change the original array.
// forEach() does not execute the function for array elements without values.

// forEach() method takes a callback function as an argument and runs that callback function on each element present in the array.
// The callback function takes up to three arguments: the current element, the index of the current element, and the array over which iteration is happening.



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

// logging out each individual character using forEach and for of

/**
 * for (let character of characters) {
  console.log(characters)
}

characters.forEach((character) => {
    console.log(character)
})
 * 
 */


characters.forEach((character) => {
    console.log(character.emoji)
})
// logout the same individual characters using forEach

// Using forEach to log out the powers of each character
characters.forEach((character) => {
  console.log(character.powers)
})

// logout each individual powers using forEach

characters.forEach((character) => {
  character.powers.forEach((power) => {
    console.log(power)
  })
})

characters.forEach((character, index) => {
  console.log(index, character.title)
})