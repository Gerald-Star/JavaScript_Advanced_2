


// Object Literals

const book1 = {
  title: "Book one",
  author: "Jones Herr",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

};

console.log(book1.title);
console.log(book1.getSummary());


const book2 = {
  title: "Common Sense",
  author: "Jones Herr",
  year: "2016",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

};

// To get values and keys of an object
console.log(Object.values(book2));
console.log(Object.keys(book2));

