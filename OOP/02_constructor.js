// what is a constructor?

// A constructor is a function that creates an instance of a class which is typically called an “object”.
//In JavaScript, a constructor gets called when you declare an object using the new keyword.

// The purpose of a constructor is to create an object and set values if there are any object properties present.

// Use of constructor in JavaScript

// In JavaScript, a constructor gets called when you declare an object using the new keyword.

//What does a constructor do?

// A constructor is a function that initializes an object. It prepares the object for use and accepts arguments that a constructor can use to set the value of member properties and methods when the object is first created.

// The constructor is a special method of a class for creating and initializing an object of that class.

// The constructor method is called automatically when a new object is created.

// The constructor method is used to initialize object properties.


// Use case of constructor in real life

// A constructor is used to create an object of a class. For example, if you have a class named Book,

// you can create an object of the Book class using the new keyword.

// The constructor initializes the object with the values you pass to the constructor.

// The constructor is used to set the initial values of the object properties.

// Where can you use a constructor in real life projects like book ordering, car type search?

// You can use a constructor in real-life projects like book ordering, car type search, and other projects where you need to create an object of a class.

// For example, if you have a class named Book, you can create an object of the Book class using the new keyword.



// Example of a constructor in JavaScript

// In this example, we have a constructor named Book that initializes the object with the title, author, and year properties.

// We have two objects book1 and book2 that are created using the Book constructor.

// The book1 object has the title, author, and year properties set to "New Version", "Jones Herr", and "2013" respectively.

// The book2 object has the title, author, and year properties set to "Never Mind", "Mary Jane", and "2016" respectively.

// The getSummary method is added to the book1 and book2 objects to get the summary of the book.

// The getSummary method returns the title, author, and year of the book.

// The getSummary method is called on the book1 and book2 objects to get the summary of the book.

// The output of the getSummary method is displayed on the console.


function Book() {
  console.log("Book initialized...");
}

// Instantiate an Object





const book1 = {
  title: "New Version",
  author: "Jones Herr",
  year: "2013",

  getSummary: function () {
    return `${this.title} was written by ${this.author}
     in ${this.year}`;
  }
};

const book2 = {
  title: "Never Mind",
  author: "Mary Jane",
  year: "2016",

  getSummary: function () {
    return `${this.title} was written by ${this.author} 
    in ${this.year}`;
  }
};


console.log(book1.getSummary());
console.log(book2.getSummary());


// Inheritance

// Inherit the Book object

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constructor

function Magazine(title, author, year, month) {
  Book.call(title, author, month, year);
  
  this.title = title;
  this.author = author;
  this.month = month;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.month} ${this.year} `
  }


}

 Magazine.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.month} ${this.year} `
  }

// Instantiate Magazine Object
// new makes an instance of the object and assigns it to a variable mag1 in this case
const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");

// store mag2  getSummary in the prototype
const mag2 = new Magazine("Mag Two", "Jane Doe", "2019", "Feb"); 

console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.author)

// Inherit Prototype
console.log(mag2.getSummary()); // Using the prototype method to getSummary
//


// getAge - Prototype Method

// Other methods can be added to the prototype
// Types of prototype methods include 
/*
  getAge
  getSummary
  getTitle
  getAuthor
  getYear

*/

Magazine.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
}

console.log(mag1.getAge());
console.log(mag2.getAge());


// Revise / Change the year

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
}

//mag1.revise("2020");
//console.log(mag1);