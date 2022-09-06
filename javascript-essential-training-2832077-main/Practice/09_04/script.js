/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
 const gridContainer = document.querySelector(".grid");

 gridContainer.addEventListener("mouseenter", () => {
   gridContainer.style.outline = "6px solid red";
 });
 
 gridContainer.addEventListener("mouseleave", () => {
   gridContainer.style.outline = "";
 });
 

var cell = document.querySelectorAll(".cell");

cell.forEach((item) => {
    item.addEventListener("mouseenter", function( ) {
        // alert("mouse over test!");
        console.log(item);
        let colorCell =  "#" + Math.floor(Math.random()*16777215).toString(16);
        console.log(colorCell);
        item.style.backgroundColor = colorCell; 
        
    }
        , false);
});

cell.forEach((item) => {
    item.addEventListener("click", function( ) {
        console.log(item);
        if (item.style.outline === "" || item.style.outline === "none"){
            item.style.outline = "10px solid blue"; 
        } else {
            item.style.outline = "none";
        }
    }
        , false);
});

cell.forEach((item) => {
    item.addEventListener("mouseleave", function( ) {
        // alert("mouse over test!");
        console.log(item + "christina");
        
        item.style.backgroundColor = "hsl(0, 0%, 90%)"; 
        
    }
        , false);
});


const body = document.body;
body.addEventListener("keydown", (event) => {
  // event.code holds the current key pressed:
  console.log("xristina");
  console.log(event.code);

  // Test for KeyD (the "d" key)
  if (event.code === "KeyD") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
      : (body.style.backgroundColor = "");
  }
});
