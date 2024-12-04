// what is a constructor?

// A constructor is a function that creates an instance of a class which is typically called an “object”.
//In JavaScript, a constructor gets called when you declare an object using the new keyword.

// The purpose of a constructor is to create an object and set values if there are any object properties present.

// Use of constructor in JavaScript

// In JavaScript, a constructor gets called when you declare an object using the new keyword.

//What does a constructor do?





function Book() {
  console.log("Book initialized...");
}

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
  Book.call(this, title, author, year);

  this.month = month;
  this.title = title;
  this.author = author;
  this.year = year;
  
}

// Instantiate Magazine Object

const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");

// Inherit Prototype

Magazine.prototype = Object.create(Book.prototype);

// Use Magazine Constructor