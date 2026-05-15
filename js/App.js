
import {
    renderTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
    applyTheme,
    toggleTheme
} from "./ui.js";

const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const themeBtn = document.getElementById("theme-btn");

addBtn.addEventListener("click", () => {
    const text = todoInput.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    addTodo(text);

    todoInput.value = "";
});

document.addEventListener("click", event => {
    if (event.target.classList.contains("toggle-btn")) {
        toggleTodo(event.target.dataset.id);
    }

    if (event.target.classList.contains("delete-btn")) {
        deleteTodo(event.target.dataset.id);
    }

    if (event.target.classList.contains("filter-btn")) {
        setFilter(event.target.dataset.filter);
    }
});

themeBtn.addEventListener("click", () => {
    toggleTheme();
});

document.addEventListener("DOMContentLoaded", () => {
    renderTodos();
    applyTheme();
});
