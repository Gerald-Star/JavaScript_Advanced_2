


// Object Literals

const book = {
  title: "Book one",
  author: "Jones Herr",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

};

console.log(book.title);
console.log(book.getSummary());


const books = {
  title: "Common Sense and The Reasons",
  author: "Jones Herr",
  year: "2016",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

};

// To get values and keys of an object
console.log(Object.values(books));
console.log(Object.keys(books));

