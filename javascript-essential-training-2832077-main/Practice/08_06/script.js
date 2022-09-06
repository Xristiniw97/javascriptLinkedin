/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
// Create a basic function declaration
// Make a change to an element in the DOM
// Call the function declaration 
// Create a basic function expression
// Find an element
// make a change to it
// call the function
// confirm that it works

function changeElement(mainElement) {
    mainElement.style.height = "100vh";
    mainElement.style.backgroundColor = "green";
}

const mainChanges = function (mainElement) {
    mainElement.style.padding = "0";
    mainElement.style.margin = "100px";
}

const mainChanges2 = (mainElement) =>{
    mainElement.style.border = "100px solid black";
}

let mainElement = document.querySelector("main");

changeElement(mainElement);
mainChanges(mainElement);
mainChanges2(mainElement);

