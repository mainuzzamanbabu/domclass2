const btn = document.getElementById('clickBtn');
const message = document.getElementById('message');

btn.addEventListener ('click',function(){
    message.textContent = 'Button clicked!';
    message.style.color = 'red'; 
})

const box = document.getElementById('hoverBox');

box.addEventListener('mouseover',function(){
    box.style.backgroundColor = 'salmon';
    box.textContent = 'Hovered!';
})

box.addEventListener('mouseout',function(){
    box.style.backgroundColor = 'lightgray';
    box.textContent = 'Hover Me';
})

const input = document.getElementById('nameInput');
const output = document.getElementById('nameOutput');

input.addEventListener('input',function(){
    output.textContent = input.value;

})


