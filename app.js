// Variables
const input = document.querySelector(".todo-input");
const addBtn = document.querySelector(".btn");
const del = document.querySelector(".del");
const mark = document.querySelector(".completed");
const list = document.querySelector(".todo-list");
const heading = document.querySelector(".heading");

let todos = [];
let item;

// Change heading and outline if todos exists or not
function checkTodo() {
  if (todos.length <= 0) {
    heading.textContent = "Nothing to show here :(";
    list.style.outline = "none";
  } else {
    heading.textContent = "Remaining Todos";
    list.style.outline = "2px solid black";
  }
}

// Add Todo
function addTodo() {
  // Get the input value
  item = input.value;

  // Add to array if value is not empty, or already in the array
  if (item != "" && !todos.includes(item)) {
    todos.push(item);
    input.value = "";
  } else if (todos.includes(item)) {
    alert("Item already present in array!");
    input.value = "";
    return;
  } else {
    alert("Field value cannot be empty");
  }

  list.innerHTML = "";

  todos.forEach(function (todo) {
    list.insertAdjacentHTML(
      "beforeend",
      `
    <div class="todo">
    <span class="todo-text">${todo}</span>
    <span class="hidden">
      <i class="fa-solid fa-xmark del"></i>
    </span>
      <span class="hidden">
        <i class="fa-solid fa-check completed"></i>
      </span>
    </div>
  `
    );
    const todoItem = document.querySelector(".todo");
    todoItem.classList.add("add");
  });
  input.value = "";

  checkTodo();
}

// Delete a Todo
list.addEventListener("click", function (event) {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains("del")) {
    // Get the parent element of the delete button (i.e., the todo div)
    const todo = event.target.parentElement.parentElement;

    // Get the index of the todo in the array
    const index = todos.findIndex(function (item) {
      return item === todo.querySelector(".todo-text").textContent;
    });

    // Remove the todo from the array
    todos.splice(index, 1);

    // Remove the todo from the HTML list
    const todoItem = document.querySelector(".todo");
    todoItem.classList.remove("add");
    todoItem.classList.add("remove");
    todoItem.addEventListener("animationend", function () {
      setTimeout(function () {
        todo.remove();
      }, 1);
    });
  }
  checkTodo();
});

// Mark a todo as Completed
list.addEventListener("click", function (event) {
  // Check if the clicked element is a mark as completed button
  if (event.target.classList.contains("completed")) {
    // Get the parent element of the delete button (i.e., the todo div)
    const todo = event.target.parentElement.parentElement;

    // Get the index of the todo in the array
    const index = todos.findIndex(function (item) {
      return item === todo.querySelector(".todo-text").textContent;
    });

    // Remove the todo from the array
    todos.splice(index, 1);

    // Remove the todo from the HTML list
    const todoItem = document.querySelector(".todo");
    todoItem.classList.remove("add");
    todoItem.classList.add("remove");
    todoItem.addEventListener("animationend", function () {
      setTimeout(function () {
        todo.remove();
      }, 1);
    });
  }
  checkTodo();
});

checkTodo();
