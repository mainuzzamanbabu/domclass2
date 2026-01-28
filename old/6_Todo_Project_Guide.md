# 📝 Todo Project: How it Works? (Teacher's Guide)

This guide explains the JavaScript logic of the **Step 6: Todo Project** so you can explain it easily to your students.

---

## 🏗️ The 8 Core Parts of the Logic

### 1. SELECT Elements (The Search)
Before doing anything, we use `document.getElementById()` and `querySelectorAll()` to "grab" the HTML elements we need.
*   **Purpose:** JS needs to know which button or input it's talking to.

### 2. GET CURRENT TIME (The Date Object)
We created a custom function `getCurrentTime()` using `new Date()`.
*   **Concept:** Teaches students how to extract hours, minutes, and months from the system clock.
*   **Logic:** We add a "0" if minutes are less than 10 (e.g., `10:05` instead of `10:5`).

### 3. UPDATE COUNTER (The Numbers)
A function that runs every time a task is added, deleted, or completed.
*   **How:** It counts how many `<li>` items exist and how many have the `.done` class.
*   **Empty State:** If total is 0, it shows the "No tasks yet" message.

### 4. ADD TASK (The Creation)
When the "Add" button is clicked:
1.  Check if the input is empty (`Validation`).
2.  Use `document.createElement('li')` to make a new item.
3.  Set its `innerHTML` with task text + timestamp + delete button.
4.  Use `appendChild()` to put it in the list.

### 5. EVENT DELEGATION (The Master Listener)
Instead of adding a listener to EVERY task, we add **one** listener to the parent `<ul>`.
*   **Toggle Done:** If you click on the text, it toggles the `.done` class.
*   **Delete:** If you click the red button, it removes the parent `<li>`.
*   *Why?* This is better for performance and works for tasks added in the future!

### 6. DOUBLE-CLICK to EDIT (The Advanced Part)
Teaches `replaceChild()`.
1.  When double-clicked, we replace the `<span>` with an `<input>`.
2.  Users type the new name.
3.  When they press "Enter" or click away (`blur`), we replace the `<input>` back with a `<span>` containing the new text.

### 7. FILTER TASKS (The logic)
Uses the `data-filter` attribute from HTML.
*   **All:** Shows everything.
*   **Active:** Hides items with the `.done` class.
*   **Completed:** Hides items WITHOUT the `.done` class.

### 8. CLEAR BUTTONS (The Cleanup)
*   **Clear All:** Loops through everything and calls `.remove()`.
*   **Clear Completed:** Only loops through items with the `.done` class and removes them.

---

## 💡 Key Terms to Tell Students:
*   **DOM (Document Object Model):** The tree structure of HTML.
*   **Event:** An action (click, double-click, keypress).
*   **Validation:** Checking if data is correct before using it.
*   **classList:** Adding/Removing CSS styles via JS.
