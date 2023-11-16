'use strict'

var gTodos
var gFilterBy = 'All'

_createTodos()

function getTodos() {
	switch (gFilterBy) {
		case 'All':
			return gTodos

		case 'Done':
		case 'Active':
			const isDone = gFilterBy === 'Done' ? true : false
			return gTodos.filter(todo => todo.isDone === isDone)

		case 'Task':
			return gTodos.sort((todoA, todoB) => {
				const txtA = todoA.txt.toUpperCase()
				const txtB = todoB.txt.toUpperCase()
				if (txtA < txtB) return -1
				if (txtA > txtB) return 1
				// names must be equal
				return 0
			})

		case 'Created At':
			return gTodos.sort((todoA, todoB) => todoA.createdAt - todoB.createdAt)

		case 'Importance':
			return gTodos.sort((todoA, todoB) => todoA.importance - todoB.importance)

		default:
			return null
	}
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

function addTodo(txt, importance) {
	const todo = _createTodo(txt, importance)
	gTodos.unshift(todo)

	_saveTodos()
}

function removeTodo(todoId) {
	const idx = gTodos.findIndex(todo => todo.id === todoId)
	gTodos.splice(idx, 1)

	_saveTodos()
}

function toggleTodo(todoId) {
	const todo = gTodos.find(todo => todo.id === todoId)
	todo.isDone = !todo.isDone

	_saveTodos()
}

// Private functions

function _createTodos() {
	gTodos = loadFromStorage('todosDB')
	if (gTodos && gTodos.length) return

	gTodos = [_createTodo('Do this'), _createTodo('Do that'), _createTodo('Try here')]
	_saveTodos()
}

function _createTodo(txt, importance = 1) {
	return {
		id: makeId(),
		txt,
		isDone: false,
		createdAt: Date.now(),
		importance
	}
}

function _saveTodos() {
	saveToStorage('todosDB', gTodos)
}