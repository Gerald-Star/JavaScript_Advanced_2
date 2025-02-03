// includes() method is used to check if an array contains a particular element or not. It returns true if the element is present in the array, otherwise false.

// includes() method is case sensitive.

// includes() method returns true if the element is present in the array, otherwise false.

// includes() method does not change the original array.

const emojis = ['🐥','🐯','🐼']
console.log(emojis.includes(''))


const characters = ['🥷', '🧙', '👹', '🦄']
console.log(characters.includes('🧙'))


const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []

addItemBtn.addEventListener('click', () => {
  /*
Challenge:
1. Add an if else to the event listener's function.
2. Only add an item to the shoppingList array if it 
   is not already in the shoppingList array.
3. If an item is a duplicate, clear the input field
   and log out "no duplicates".
*/
  if (shoppingList.includes(itemInput.value)) {
    console.log('no duplicates')
  }
  else {
    shoppingList.push(itemInput.value)
    render() // why do we need to call render() here?
    // render() is called here to update the list of items in the shopping list
     itemInput.value = '' // clear the input field
  }

})

function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()
// The includes() method is used to check if an array contains a particular element or not. 
//It returns true if the element is present in the array, otherwise false.