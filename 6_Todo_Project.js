// ========== Todo List Project ==========
// Concepts: Select, Manipulate, Events, Create/Remove

// ===== 1. SELECT All Elements =====
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');
const clearDoneBtn = document.getElementById('clearDoneBtn');
const emptyMsg = document.getElementById('emptyMsg');

// Counter elements
const totalCount = document.getElementById('totalCount');
const doneCount = document.getElementById('doneCount');
const remainCount = document.getElementById('remainCount');

// Filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');


// ===== 2. GET CURRENT TIME Function =====
function getCurrentTime() {
    const now = new Date();

    // Get hours, minutes
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12

    // Add leading zero to minutes
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Get date
    const day = now.getDate();
    const month = now.toLocaleString('en', { month: 'short' });

    return `${day} ${month}, ${hours}:${minutes} ${ampm}`;
}


// ===== 3. UPDATE COUNTER Function =====
function updateCounter() {
    const allTasks = document.querySelectorAll('#taskList li:not(.empty-msg)');
    const doneTasks = document.querySelectorAll('#taskList li.done');

    const total = allTasks.length;
    const done = doneTasks.length;
    const remain = total - done;

    // Update display
    totalCount.innerText = total;
    doneCount.innerText = done;
    remainCount.innerText = remain;

    // Show/hide empty message
    if (total === 0) {
        emptyMsg.style.display = 'block';
    } else {
        emptyMsg.style.display = 'none';
    }
}


// ===== 3. ADD Task =====
addBtn.addEventListener('click', function () {
    const taskText = taskInput.value;

    // Validation
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // CREATE new li element
    const li = document.createElement('li');

    // Get current time
    const timeNow = getCurrentTime();

    // Add HTML inside li (with timestamp)
    li.innerHTML = `
        <div class="task-info">
            <span class="task-text">${taskText}</span>
            <span class="task-time">Added: ${timeNow}</span>
        </div>
        <button class="delete-btn">Delete</button>
    `;

    // APPEND to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    // Update counter
    updateCounter();
});

// Also add task when pressing Enter key
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});


// ===== 5. CLICK on Task List (Event Delegation) =====
taskList.addEventListener('click', function (event) {
    const clicked = event.target;

    // Click on task text -> Toggle done
    if (clicked.classList.contains('task-text')) {
        // task-text is inside task-info div, which is inside li
        const li = clicked.parentElement.parentElement;
        li.classList.toggle('done');
        updateCounter();
    }

    // Click on delete button -> Remove task
    if (clicked.classList.contains('delete-btn')) {
        const li = clicked.parentElement;
        li.remove();
        updateCounter();
    }
});


// ===== 6. DOUBLE-CLICK to Edit Task =====
taskList.addEventListener('dblclick', function (event) {
    const clicked = event.target;

    if (clicked.classList.contains('task-text')) {
        const currentText = clicked.innerText;
        const taskInfo = clicked.parentElement; // task-info div

        // Create input field
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = currentText;

        // Replace span with input inside task-info
        taskInfo.replaceChild(editInput, clicked);
        editInput.focus();

        // Save on Enter key
        editInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                saveEdit();
            }
        });

        // Save on blur (click outside)
        editInput.addEventListener('blur', saveEdit);

        function saveEdit() {
            const newText = editInput.value;
            if (newText !== "") {
                const newSpan = document.createElement('span');
                newSpan.className = 'task-text';
                newSpan.innerText = newText;
                taskInfo.replaceChild(newSpan, editInput);
            }
        }
    }
});


// ===== 6. FILTER Tasks =====
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // Remove active from all, add to clicked
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        const allTasks = document.querySelectorAll('#taskList li:not(.empty-msg)');

        allTasks.forEach(function (task) {
            // Reset - show all first
            task.classList.remove('hidden');

            // Then hide based on filter
            if (filter === 'active' && task.classList.contains('done')) {
                task.classList.add('hidden');
            }
            if (filter === 'done' && !task.classList.contains('done')) {
                task.classList.add('hidden');
            }
        });
    });
});


// ===== 7. CLEAR Completed Tasks =====
clearDoneBtn.addEventListener('click', function () {
    const doneTasks = document.querySelectorAll('#taskList li.done');

    doneTasks.forEach(function (task) {
        task.remove();
    });

    updateCounter();
});


// ===== 8. CLEAR ALL Tasks =====
clearBtn.addEventListener('click', function () {
    const allTasks = document.querySelectorAll('#taskList li:not(.empty-msg)');

    allTasks.forEach(function (task) {
        task.remove();
    });

    updateCounter();
});
