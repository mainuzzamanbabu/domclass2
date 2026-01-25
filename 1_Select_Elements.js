// --- 1. Select by ID (The most common way) ---
// document.getElementById('id-name')
const heading = document.getElementById('main-heading');
console.log("Selected by ID:", heading); // Check the console to see the element


// --- 2. Select by Class Name ---
// document.getElementsByClassName('class-name')
// Returns a "Collection" (like a list) of elements
const boxes = document.getElementsByClassName('box');
console.log("Selected by Class:", boxes);

// Note: To use one, you have to pick it by index, e.g., boxes[0]


// --- 3. Select by Tag Name ---
// document.getElementsByTagName('tag-name')
const allParagraphs = document.getElementsByTagName('p');
console.log("Selected by Tag:", allParagraphs);


// --- 4. Select by CSS Selector (The modern, powerful way) ---

// querySelector -> Selects the *first* match only
const firstBox = document.querySelector('.box'); 
console.log("First match with querySelector:", firstBox);

// querySelectorAll -> Selects *all* matches (Returns a NodeList)
const allListItems = document.querySelectorAll('ul li');
console.log("All list items with querySelectorAll:", allListItems);
