
const s1 = "Hello";
console.log(typeof s1);

const s2 = new String("Hello");
console.log(typeof s2)

//Why is this an object ?
// Because when we use the new keyword, it creates an object

//DOM Object
console.log(window); // window is the absolute parent object in the browser
window.alert(1);
//this opens up the window object - example: window.alert(1) is the same as alert(1)

/* !!! IMPORTANT !!!
window.alert();
window.clearTimeout();
window.document.getElementById();
window.localStorage();
all of these are part of the window objects
*/


// Set Timeout with window object
window.setTimeout(() => {
     alert("Hello");
}, 3000);

window.setTimeout(() => {

  alert("We are partying in the USA");
}, 400);


window.setTimeout(() => {
  alert("Partying with my family is fun")
}, 500);


//To know your system properties using window objects
console.log(navigator.appVersion);
