
import { state, saveState } from "./state.js";
import { generateId } from "./utils.js";

const todoList = document.getElementById("todo-list");

export function renderTodos() {
    todoList.innerHTML = "";

    let filteredTodos = state.todos;

    if (state.filter === "active") {
        filteredTodos = state.todos.filter(
            todo => !todo.completed
        );
    }

    if (state.filter === "completed") {
        filteredTodos = state.todos.filter(
            todo => todo.completed
        );
    }

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");

        if (todo.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${todo.text}</span>

            <div>
                <button class="toggle-btn" data-id="${todo.id}">
                    ✔
                </button>

                <button class="delete-btn" data-id="${todo.id}">
                    ✖
                </button>
            </div>
        `;

        todoList.appendChild(li);
    });
}

export function addTodo(text) {
    const newTodo = {
        id: generateId(),
        text,
        completed: false,
        createdAt: new Date().toISOString()
    };

    state.todos.push(newTodo);

    saveState();
    renderTodos();
}

export function toggleTodo(id) {
    const todo = state.todos.find(
        item => item.id === Number(id)
    );

    if (todo) {
        todo.completed = !todo.completed;
    }

    saveState();
    renderTodos();
}

export function deleteTodo(id) {
    state.todos = state.todos.filter(
        todo => todo.id !== Number(id)
    );

    saveState();
    renderTodos();
}

export function setFilter(filter) {
    state.filter = filter;

    saveState();
    renderTodos();
}

export function applyTheme() {
    document.body.className = state.theme;
}

export function toggleTheme() {
    state.theme =
        state.theme === "light" ? "dark" : "light";

    saveState();
    applyTheme();
}
