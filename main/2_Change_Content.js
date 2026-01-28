// 1. Select the elements
const title = document.getElementById('cardTitle');
const text = document.getElementById('cardText');
const card = document.getElementById('myCard');
const link = document.getElementById('myLink');

// --- 2. Changing Text Content ---
// .innerText or .textContent
title.innerText = "Hello! New Javascript Title";

// --- 3. Changing HTML Content ---
// .innerHTML (Can include HTML tags)
text.innerHTML = "I have been <strong>changed</strong> by JS! <br> I now have bold text.";

// --- 4. Changing CSS Styles ---
// element.style.property = 'value'
// Note: CSS 'background-color' becomes 'backgroundColor' in JS
card.style.backgroundColor = "#c8e77fff"; // Light yellow
card.style.border = "2px solid orange";
card.style.borderRadius = "10px";
title.style.color = "red";

// --- 5. Changing Attributes ---
// .setAttribute('attribute', 'value') or element.attribute = value
link.href = "https://google.com";
link.innerText = "Go to Google";
link.target = "_blank"; // Open in new tab
