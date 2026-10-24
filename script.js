const todoInput = document.getElementById('todo-input')
const addButton = document.getElementById('todo-button')
const todoList = document.getElementById('todo-list')

addButton.addEventListener('click', addTask)
todoList.addEventListener('click', deleteModifyCheck)

function addTask(event){
    event.preventDefault();

    const blockTask = document.createElement('div');
    blockTask.classList.add('block-task');

    const taskText = document.createElement('li');
    taskText.textContent = todoInput.value;
    taskText.classList.add('li');
    blockTask.appendChild(taskText);

    const checkButton = document.createElement("button");
    checkButton.textContent('add');
    checkButton.classList.add('check-button');
    blockTask.appendChild(checkButton);

    const trashButton = document.createElement('button');
    trashButton.textContent('Trash');
    trashButton.classList.add('trash-button');
    blockTask.appendChild(trashButton);

    const modifyButton = document.createElement('button');
    modifyButton.textContent('Modify');
    modifyButton.classList.add('modify-button');
    blockTask.appendChild(modifyButton);

    todoList.appendChild(blockTask);
    todoInput.value = 0;
}