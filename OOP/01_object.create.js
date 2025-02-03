
//object create

const bookShelf = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },

  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
}

// Create Object

const shelf1 = Object.create(bookShelf);
shelf1.title = " Comedy";
shelf1.author = "Jones Herr";
shelf1.year = "2013";


console.log(shelf1.getSummary());
console.log(shelf1.getAge());

// Another way to create an object using value and key
const shelf2 = Object.create(bookShelf, {

  title: { value: "The New York Strangers" },
  author: { value: "Jones Herr" },
  year: { value: "2017" }
});

console.log(shelf2.getSummary());
console.log(shelf2.getAge());