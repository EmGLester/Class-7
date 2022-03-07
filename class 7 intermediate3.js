// You will be given an array of drinks, 
// with each drink being an object with two properties: 
// name and price. Create a function with the drinks array as an argument and 
// return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// sort function by more expensive drink to less expensive 
// will need to use > or < 

function cheapDrinks {
    drinks.sort(function(a, b){return a - b})

}

const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];




// Class Example: //
// sortDrinkByPrice(drinks)    ➞    [{name: "lime", price: 10}, {name: "lemonade", price: 50}]// 