const heading = document.getElementById('main-heading');
console.log("Selecting by id: ",heading);
 
const boxes = document.getElementsByClassName('box');
console.log("Selecting by class: ",boxes);


const allParagraphs = document.getElementsByTagName('p');
console.log("Selecting by tag: ",allParagraphs);

const firstBox = document.querySelector('.box');
console.log("Selecting by class: ",firstBox);

const allBoxes = document.querySelectorAll('.box');
console.log("Selecting by class: ",allBoxes);

const listItems = document.querySelectorAll('ul li');
console.log("Selecting by class: ",listItems);
