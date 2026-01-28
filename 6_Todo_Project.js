const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');
const clearDoneBtn = document.getElementById('clearDoneBtn');
const emptyMsg = document.getElementById('emptyMsg');

const totalCount = document.getElementById('totalCount');
const totalDone = document.getElementById('totalDone');
const remainCount = document.getElementById('remainCount');

const filterBtns = document.querySelectorAll('.filter-btn');


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


addBtn.addEventListener('click', function(){
    const taskText = taskInput.value.trim();

    if (taskText === ""){
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement('li'); 
    li.innerHTML = `
    <div class="task-info">
        <span class="task-text">${taskText}</span>
    </div>
    
    <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
    updateCounter();
});

taskInput.addEventListener('keypress',function(event){
    if(event.key === 'Enter'){
      addBtn.click();   
    }
});

taskList.addEventListener('click',function(event){
    const clicked = event.target; 

    if(clicked.classList.contains('task-text')){
        const li = clicked.parentElement.parentElement;
        li.classList.toggle('done');
        updateCounter();
    }
    if(clicked.classList.contains('delete-btn')){
        const li = clicked.parentElement;
        li.remove();
        updateCounter();
    }
})


// taskList.addEventListener('dbclick',function(event){
//     const clicked = event.target;
//     if(clicked.classList.contains('task-text')){
//         const currentText = clicked.innerText;
//         const taskInfo = clicked.parentElement;

//         const editInput = document.createElement('input');
//         editInput.type = 'text';
//         editInput.className = 'edit-input';
//         editInput.value = currentText;
        

//         taskInfo.replaceChild(editInput, clicked);
//         editInput.focus();

//         editInput.addEventListener('keypress',function(event){
//             if(event.key === 'Enter'){
//                 saveEdit();
//             }
//         })
//         editInput.addEventListener('blur',function(){
//             saveEdit();
//         })
//         function saveEdit(){
//             const newText = editInput.value.trim();
//             if(newText !== ""){
//                 const newSpan = document.createElement('span');
//                 newSpan.classList.add('task-text');
//                 newSpan.innerText = newText;
//                 taskInfo.replaceChild(newSpan, editInput);
//             }
//         }
//     }
// })

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
