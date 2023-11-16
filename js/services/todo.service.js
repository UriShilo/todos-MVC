'use strict'

var gTodos = [
    { id: 't101', txt: 'Do this', isDone: false },
    { id: 't102', txt: 'Do that', isDone: true },
    { id: 't103', txt: 'Try here', isDone: false },
]
var gFilterBy = 'All'

function getTodos() {
    if(gFilterBy === 'All') return gTodos

    const isDone = gFilterBy === 'Done' ? true : false
    return gTodos.filter(todo => todo.isDone === isDone)
}

function getTotalCount() {
    return gTodos.length
}

function getActiveCount() {
    return gTodos.filter(todo => !todo.isDone).length
}

function setFilterBy(filterBy) {
    gFilterBy = filterBy
}

function addTodo(txt) {
    const todo = {
        id: `t${ Date.now() % 10000}`,
        txt,
        isDone: false,
    }
    gTodos.unshift(todo)
}

function removeTodo(todoId) {
    const idx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(idx, 1)
}

function toggleTodo(todoId) {
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
}