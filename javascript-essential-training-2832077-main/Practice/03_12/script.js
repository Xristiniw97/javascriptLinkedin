/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */


 import Glass from "./Glass.js";

 const waterGlass = new Glass (
    "Water Glass",
    "red",
    0.50,
    50,
    true
 );

 console.log(waterGlass.type, + " ", waterGlass.color, + " ", waterGlass.height, + " ", waterGlass.ml, + " ", waterGlass.isFull);