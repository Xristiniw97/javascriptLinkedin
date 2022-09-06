/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const glassOfWater = {
    color: "red",
    height: 0.50,
    ml: 250,
    isFull: true,
    fullGlass: function (isFull) {
        this.isFull = isFull;
    }
}

console.log("The color of the glass is ", glassOfWater["color"]);
console.log("The height of the glass is ", glassOfWater["height"]);
console.log("The ml if the glass is ", glassOfWater.ml);
console.log("Is the glass full?", glassOfWater.isFull);
console.log("Drink the water please!");

let newIsFull = false;
glassOfWater["isFull"] = newIsFull;

console.log("Now is thw glass full?", glassOfWater.isFull);
