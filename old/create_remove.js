const addBtn = document.getElementById('addBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');


addBtn.addEventListener('click',function(){
    const text = itemInput.value;
    // if(text.trim() !== ''){
        
    // }
    if(text === ""){
        alert("Please write something!");
        return;
    }
    const newItem = document.createElement('li');
    newItem.innerHTML = `${text} <span class="delete-btn">X</span>`;
    itemList.appendChild(newItem);
    itemInput.value = "";
}) ;

itemList.addEventListener('click',function(e){
  if(event.target.classList.contains('delete-btn')){
    const itemToRemove = event.target.parentElement;
    itemList.removeChild(itemToRemove);
  }
})










