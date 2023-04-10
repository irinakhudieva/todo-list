let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];

let objStr = localStorage.getItem('todo');

if (objStr != null) {
    todoList = JSON.parse(objStr);
}

displayMessages();

addButton.addEventListener('click', function() {
    
    if (addMessage.value !== '') {
        let newTodo =  {
            todo: addMessage.value,
        }
        todoList.push(newTodo);
        displayMessages();
        saveInfo();
        addMessage.value = '';
    }
});

function saveInfo() {
    let str = JSON.stringify(todoList);
    localStorage.setItem('todo', str);
    displayMessages();
};

function displayMessages() {
    let displayMessage = '';
    todoList.forEach(function(item, index) {
        
        displayMessage += `
        <li class="task"> 
        ${item.todo}
        <button class="delete" onclick='deleteTask()'><i class="fas fa-times" style="color: #ffffff;"></i></button>
        <button class="done"><i class="fa fa-solid fa-check" style="color: #ffffff;"></i></button>
        </li>`;    
    });

    todo.innerHTML = displayMessage;
};

function deleteTask(todo) {
    todoList.splice(todo, 1);
    displayMessages()
    saveInfo(todoList);
};

document.querySelectorAll('.task').forEach(task =>
    task.addEventListener('click', function() {
      this.classList.toggle('completed');
}));


const clearAllButton = document.querySelector('.clearAll');

if (todoList.length != 0) {
    clearAllButton.style.display = "block";
};

clearAllButton.addEventListener('click', function() {
    if (todoList.length > 0) {
        todoList.length = 0;
    }
    displayMessages(); 
    saveInfo();
});



