'use strict'

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodoList = document.querySelector('.todo-list')
    const strHtml = `
        <li>
            <span class="done">Do this</span>
            <button onclick="onRemoveTodo(123)">x</button>
        </li>
    `

    elTodoList.innerHTML = strHtml
}

function onRemoveTodo(todoId) {
    console.log('Hi')
}