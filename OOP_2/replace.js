// string.replace() and string.replaceAll()methods

// string.replace() method is used to replace a specified value with another value in a string.

// The replace() method replaces the first occurrence of a specified value in a string.

// The replace() method does not change the original string.

// The replace() method is case-sensitive.

// The replace() method is not a regular expression.

// The replace() method is not global.

const passingGrade = "The student passing grade is 70. Every student must score above 70 to pass the exam."
console.log(passingGrade.replace("70", "80")) // The student passing grade is 80. Every student must score above 70 to pass the exam.

// string.replaceAll() method is used to replace all occurrences of a specified value with another value in a string.

// The replaceAll() method replaces all occurrences of a specified value in a string.

// The replaceAll() method does not change the original string.

// The replaceAll() method is case-sensitive.

// The replaceAll() method is not a regular expression.

// The replaceAll() method is global.

const passingGrade2 = "The student passing grade is 70. Every student must score above 70 to pass the exam."

console.log(passingGrade2.replaceAll("70", "80")) // The student passing grade is 80. Every student must score above 80 to pass the exam.


