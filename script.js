const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");

addTaskButton.addEventListener("click", addTask);
todoList.addEventListener("click", deleteModifyCheck);

function addTask(event) {
  event.preventDefault();

  const valuetodoInput = todoInput.value.trim();

  const taskBlock = document.createElement("div");
  taskBlock.classList.add("task-block");

  const taskText = document.createElement("li");
  taskText.textContent = valuetodoInput;
  taskBlock.appendChild(taskText);

  const checkButton = document.createElement("button");
  checkButton.textContent = "Check";
  checkButton.classList.add("check-button");
  taskBlock.appendChild(checkButton);

  const trashButton = document.createElement("button");
  trashButton.textContent = "Trash";
  trashButton.classList.add("trash-button");
  taskBlock.appendChild(trashButton);

  const modifyButton = document.createElement("button");
  modifyButton.textContent = "Modify";
  modifyButton.classList.add("modify-button");
  taskBlock.appendChild(modifyButton);

  todoList.appendChild(taskBlock);
  todoInput.value = "";
}

function deleteModifyCheck(event) {
  const item = event.target;
  const todoItem = item.parentElement;

  if (item.classList.contains("check-button")) {
    todoItem.classList.toggle("completed");
  }

  if (item.classList.contains("trash-button")) {
    todoItem.classList.add("fall");
    todoItem.addEventListener("transitionend", function () {
      todoItem.remove();
    });
  }

  if (item.classList.contains("modify-button")) {
    const oldText = todoItem.querySelector("li");

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.value = oldText.textContent;
    newInput.classList.add("todo-input");

    todoItem.replaceChild(newInput, oldText);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-button");
    todoItem.appendChild(saveButton);

    saveButton.addEventListener("click", function () {
      const newText = newInput.value.trim();
      if (newText !== "") {
        oldText.textContent = newText;
        todoItem.replaceChild(oldText, newInput);
        todoItem.removeChild(saveButton);
      }
    });
  }
}
