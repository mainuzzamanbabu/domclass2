const title = document.getElementById('cardTitle');
const text = document.getElementById('cardText');
const link = document.getElementById('myLink');

title.innerText = 'Hello! This is a new title';

text.innerHTML = 'I have been <strong>changed</strong> by JS! <br> I now have bold text.'

link.href = 'https://www.google.com';
link.innerText = 'Google';
link.target = '_blank';