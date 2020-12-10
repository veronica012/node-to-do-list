const data = require('../data')

function getTodos() {
    return data.todos;
}

function getTodoById() {
    return data.todos.find((todo) => todo.id === id)
}

module.exports = {
    getTodos,
    getTodoById
}