const data = require('../data')

function getTodos() {
    return data.todos;
}

function getTodoById(id) {
    return data.todos.find(todo => todo.id == id)
}

function deleteTodo() {
    const idx = data.todos.findIndex(todo => todo.id == id)
    if(idx > -1) {
        const deleted = data.todos.splice(idx, 1)
        return 1
    }
    return 0
}

module.exports = {
    getTodos,
    getTodoById, 
    deleteTodo
}