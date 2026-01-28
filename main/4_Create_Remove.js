const addBtn = document.getElementById('addBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

// Function to add a new item
addBtn.addEventListener('click', function () {
  const text = itemInput.value;

  if (text === "") {
    alert("Please write something!");
    return;
  }

  // --- 1. Create Element ---
  const newItem = document.createElement('li');

  // --- 2. Add Content ---
  newItem.innerHTML = `${text} <span class="delete-btn">X</span>`;

  // --- 3. Append to Parent ---
  // parent.appendChild(child)
  itemList.appendChild(newItem);

  // Clear input
  itemInput.value = "";
});

// --- 4. Removing Elements (Event Delegation) ---
// This is a bit advanced but very important.
// We add the click event to the PARENT (ul), not every single child.

itemList.addEventListener('click', function (event) {

  // Check if what was clicked is the delete button
  if (event.target.classList.contains('delete-btn')) {
    // Remove the PARENT of the X button (which is the li)
    const itemToRemove = event.target.parentElement;

    // item.remove()
    itemToRemove.remove();
  }
});
