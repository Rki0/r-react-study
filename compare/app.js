const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

let todos = [];
let idCounter = 1;

addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const todo = {
    id: idCounter++,
    text: text,
  };

  todos.push(todo);
  renderTodos();
  input.value = "";
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

function updateTodo(id, newText) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText } : todo
  );
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.text;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    editButton.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = todo.text;

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";

      saveButton.addEventListener("click", () => {
        const newText = input.value.trim();
        if (newText !== "") {
          updateTodo(todo.id, newText);
        }
      });

      li.innerHTML = "";
      li.appendChild(input);
      li.appendChild(saveButton);
      li.appendChild(deleteButton);
    });

    deleteButton.addEventListener("click", () => {
      deleteTodo(todo.id);
    });

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}
