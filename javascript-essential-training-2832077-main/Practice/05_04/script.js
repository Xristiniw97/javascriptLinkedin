/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
// Identify specific elements you want to target 
// Target specific elements nested inside other elements 
// Try advanced CSS queries to get specific targets
document.querySelector("main");
document.querySelectorAll(".feature:nth-child(3)");

const content = `
<header class="siteheader">
<div class="site-title">BackpackPacker</div>
<div class="site-description">All backpack packing, all the time.</div>
</header>
<main class="maincontent"></main>
<footer class="sitefooter">
<p>
  Demo project for JavaScript Essential Training, a LinkedIn Learning
  course.
</p>
</footer>
`;

document.body.innerHTML = content;
