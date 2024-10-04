console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable
let basket = []; 
const maxItems = 5; 

//Create a function called addItem
function addItem(item){
    basket.push(item); 
    return true; 

}
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

function listItems(){
    for (let i =0; i < basket.length; i++) {
            console.log(" List each item:", basket[i]);
    }
}

//Create a function called empty that takes 'basket'to an empty array
function empty(){
basket.length = 0; 
}

console.log("Items in the basket:"); 
listItems(); 

// Check if the basket is FULL
function isFull (){
    return basket.length >= maxItems;
} 

// Updating addItem function
function addItem(item) {
    if (isFull()) {
        return false;
    }

    basket.push(item);
    return true;
}

// Removing Items in the basket
function removeItem(item) {
    let firstMatch = basket.indexOf(item);
    if (firstMatch !== -1) {
        return basket.splice(firstMatch, 1)[0];
    }
    return null;
}
let removed = removeItem('Orange');
console.log(removed);








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
