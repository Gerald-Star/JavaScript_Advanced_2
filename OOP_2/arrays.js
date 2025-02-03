const dailySales = [100, 200, 300, 400, 500]


// every() method returns true if all elements in the array meet the condition
const salesOver1 = dailySales.every(function (stepCount) {
  return stepCount >= 10000;
})

console.log(salesOver1)

// some() method returns true if at least one element in the array meets the condition

const salesOver2 = dailySales.some(function (stepCount) {
  return stepCount >= 100;
})

console.log(salesOver2)


// find() method returns the first element in the array that meets the condition
// invoice amount over 1000USD
const invoiceAmountUSD = [100, 200, 300, 400, 500, 1299, 1002, 1234]

const invoiceAmountOver1000 = invoiceAmountUSD.find(function (invoiceAmount) {
  return invoiceAmount >= 1000;
})

console.log(invoiceAmountOver1000) // 1299
console.log(invoiceAmountUSD[0]) // 100

//* indexOf() method returns the index of the first element in the array that meets the condition
console.log(invoiceAmountUSD.indexOf(200)) // 1


// lastIndexOf() method returns the index of the last element in the array that meets the condition

console.log(invoiceAmountUSD.lastIndexOf(200)) // 1

// at() method returns the element at the specified index in the array
console.log(invoiceAmountUSD.at(2)) // 300

// Negative integers count from the end of the array
console.log(invoiceAmountUSD.at(-2)) // 1002



// findIndex() method returns the index of the first element in the array that meets the condition

const findIndexInvoiceAmountOver1000 = invoiceAmountUSD.findIndex(function (invoiceAmount) {
  return invoiceAmount >= 1000;
})

console.log(findIndexInvoiceAmountOver1000) // 5
// if no item passes the text it gives -1