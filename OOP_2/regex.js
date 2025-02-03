// Regex with replace() method in JavaScript
// What is a regular expression?
// A regular expression is a sequence of characters that forms a search pattern.

// When you search for data in a text, you can use this search pattern to describe what you are searching for.

// A regular expression can be a single character, or a more complicated pattern.

// Regular expressions can be used to perform all types of text search and text replace operations.

// The replace() method can also take a regular expression as the first argument.


// Format of Regex
// /pattern/modifiers;

const sentence = "i want to learn regex in javascript but i don't know how to learn regex in javascript";

console.log(sentence.replaceAll(/\b(i)\b/g, "I")) // I want to learn regex in javascript but I don't know how to learn regex in javascript