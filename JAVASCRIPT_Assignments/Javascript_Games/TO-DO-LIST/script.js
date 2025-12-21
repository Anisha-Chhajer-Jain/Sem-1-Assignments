
// DOM elements
var todoList = [];
var comdoList = [];
var remList = [];

var addButton = document.getElementById("add-button");
var todoInput = document.getElementById("todo-input");
var deleteAllButton = document.getElementById("delete-all");
var allTodos = document.getElementById("all-todos");
var deleteSButton = document.getElementById("delete-selected");

// Add button
addButton.addEventListener("click", add);

// Enter key support
todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") add();
});

// Delete All
deleteAllButton.addEventListener("click", deleteAll);

// Delete Selected
deleteSButton.addEventListener("click", deleteS);

function deleteAll() {
    todoList = [];
    updateList();
    appendTask(todoList);
}

function deleteS() {
    todoList = todoList.filter(data => data.complete === false);
    updateList();
    appendTask(todoList);
}

// ADDING TASK
function add() {
    var text = todoInput.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    todoList.push({
        content: text,
        id: Date.now().toString(),
        complete: false
    });

    todoInput.value = "";

    updateList();
    appendTask(todoList);
}

// UPDATE COUNTS
function updateList() {
    comdoList = todoList.filter(data => data.complete === true);
    remList = todoList.filter(data => data.complete === false);

    document.querySelector("#r-count").textContent = todoList.length;
    document.querySelector("#c-count").textContent = comdoList.length;
}

// RENDER TASKS
function appendTask(listData) {
    allTodos.innerHTML = "";

    listData.forEach(element => {
        var html = `
        <li id="${element.id}" class="todo-item">
            <p id="task">${element.complete ? `<strike>${element.content}</strike>` : element.content}</p>
            <div class="todo-actions">
                <button class="complete btn btn-success">
                    <i class="bx bx-check bx-sm"></i>
                </button>
                <button class="delete btn btn-error">
                    <i class="bx bx-trash bx-sm"></i>
                </button>
            </div>
        </li>`;
        allTodos.innerHTML += html;
    });
}

// DELETE TASK
function deleteTask(event) {
    var id = event.target.closest(".todo-item").id;

    todoList = todoList.filter(data => data.id !== id);

    updateList();
    appendTask(todoList);
}

// COMPLETE TASK
function completeTask(event) {
    var id = event.target.closest(".todo-item").id;

    todoList.forEach(data => {
        if (data.id === id) data.complete = !data.complete;
    });

    updateList();
    appendTask(todoList);
}

// SINGLE GLOBAL EVENT HANDLER
document.addEventListener("click", (event) => {

    if (event.target.closest(".delete")) {
        deleteTask(event);
    }

    if (event.target.closest(".complete")) {
        completeTask(event);
    }

    if (event.target.id === "all") {
        appendTask(todoList);
    }
    if (event.target.id === "rem") {
        appendTask(remList);
    }
    if (event.target.id === "com") {
        appendTask(comdoList);
    }
});