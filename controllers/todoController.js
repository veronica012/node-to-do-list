const data = require('../data')

function getTodos() {
    return data.todos;
}

function getTodoById(id) {
    return data.todos.find(todo => todo.id == id)
}

function deleteTodo(id) {
    const idx = data.todos.findIndex(todo => todo.id == id)
    if(idx > -1) {
        const deleted = data.todos.splice(idx, 1)
        return 1
    }
    return 0
}

function addTodo({todo, completed, list}) {
    const newTodo = {todo, completed, list}
    return data.todos.unshift(newTodo)
    return newTodo
}

module.exports = {
    getTodos,
    getTodoById, 
    deleteTodo, 
    addTodo
}