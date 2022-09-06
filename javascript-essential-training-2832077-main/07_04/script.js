/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


// Build an array
let backpackContents = ["piggy", "headlamp", "pen", "christina", "swimwear", "balls", "television", "horse"];

console.log("The array as it is: ", backpackContents);

// Remove the last item
let lastPopItem = backpackContents.pop();
console.log("The pop item from array: ", lastPopItem);  
console.log("The array without the poped item: ", backpackContents);

// Add the last item as the first item 
backpackContents.unshift(lastPopItem);
console.log("The array with the first item: ", backpackContents);

//Sort alphabetical the array
//CAPITAL LETTERS ARE FIRST
console.log("Make the array sort alphabetical: ", backpackContents.sort());

let removedItem = backpackContents.find(function (item) {
    if (item.length === 3){
        return item;
    }
});

console.log("The removed item: ", removedItem);

//Remove the item you found using the find method from the array. 2 ways

//First way
backpackContents.splice(backpackContents.indexOf(removedItem), 1);
console.log(`Array with "${removedItem}" removed:`, backpackContents);

//Second way
/*var filteredArrayy = backpackContents.filter(function (e) {
    return e !== removedItem
})
console.log("The filtered array without removed item:", filteredArrayy);
*/

    






