'use strict'

var gTodos
var gFilterBy = 'All'

_createTodos()

function getTodos() {
	if (gFilterBy === 'All') return gTodos

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
	const todo = _createTodo(txt)
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

// Private functions

function _createTodos() {
	gTodos = [_createTodo('Do this'), _createTodo('Do that'), _createTodo('Try here')]
}

function _createTodo(txt) {
	return {
		id: makeId(),
		txt,
		isDone: false,
	}
}

