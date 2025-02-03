//* Code: Inheritance


// Newspaper Constructor inherits from Book Constructor
function Newspaper(title, author, year, month) {
  
  this.title = title;
  this.author = author;
  this.month = month;
  this.year = year;

}

// getSummary for Newspaper
Newspaper.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.month} ${this.year} `
  }

// AllNations constructor
  
function AllNations(title, author, year, month) {
  Newspaper.call(this, title, author, year);

  this.month = month;
 
}
// Inherit the Newspaper object we need to use Object.create
AllNations.prototype = Object.create(Newspaper.prototype);

// Instantiate an AllNations object
const news1 = new AllNations("The New York Times", "Jones Herr", "2013", "January");

console.log(news1.getSummary());
// we get an error because we are not inheriting the Newspaper constructor from the Book constructor

console.log(news1);