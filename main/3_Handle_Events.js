// --- 1. handling Click ---
const btn = document.getElementById('clickBtn');
const msg = document.getElementById('message');

// addEventListener('event', function)
btn.addEventListener('click', function () {
  msg.innerText = "You clicked the button! Great job.";
  msg.style.color = "green";
});


// --- 2. handling Mouse Over / Mouse Out ---
const box = document.getElementById('hoverBox');

box.addEventListener('mouseover', function () {
  box.style.backgroundColor = "salmon";
  box.innerText = "Hovered!";
});

box.addEventListener('mouseout', function () {
  box.style.backgroundColor = "lightgray";
  box.innerText = "Hover Me";
});


// --- 3. handling Input (Real-time typing) ---
const input = document.getElementById('nameInput');
const output = document.getElementById('nameOutput');

input.addEventListener('input', function (event) {
  // event.target.value gets what is typed
  const typedText = event.target.value;
  output.innerText = typedText;
});
