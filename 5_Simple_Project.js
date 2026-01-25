// 1. Initial State
let count = 0;

// 2. Select Elements
const valueDisplay = document.getElementById('count-display');
const btns = document.querySelectorAll('button');

// 3. Add Event Listeners
// We can loop through all buttons to add functionality

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // Check which button was clicked based on its class
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    // 4. Update the display (Manipulation)
    valueDisplay.textContent = count;

    // Optional: Change color based on number
    if (count > 0) {
      valueDisplay.style.color = "green";
    }
    else if (count < 0) {
      valueDisplay.style.color = "red";
    }
    else {
      valueDisplay.style.color = "#333";
    }
  });
});
