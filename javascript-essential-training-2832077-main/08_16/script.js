import backpackObjectArray from "./components/data.js";

// Map throught the array and make a new array
const content = backpackObjectArray.map((item) => {
  // "item" now holds a single backpack object

  // Create new article
  let itemArticle = document.createElement("article");
  itemArticle.classList.add("backpack");

  // Set article ID to the backpack.id property
  itemArticle.setAttribute("id", item.id);

  // Set the innerHTML of itemArticle using the backpack object.
  itemArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${item.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${item.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        item.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        item.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${item.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        item.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        item.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        item.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        item.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

  // Return the backpackArticle to the content array.
  return itemArticle;
});

// Get the main
const main = document.querySelector(".maincontent");

// Loop through the content array to append each backpack article.
content.forEach((item) => {
  main.append(item);
});
