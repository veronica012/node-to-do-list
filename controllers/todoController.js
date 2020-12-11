const data = require('../data')
const pool = require('../db-conn')

async function getTodos() {
   const [result] = await pool.query('SELECT * FROM todos')
   return result
}

async function getTodoById(id) {
    const [result] = await pool.query('SELECT * FROM todos WHERE id=?', [id])
    return result[0]
}

async function deleteTodo(id) {
    const [result] = await pool.query('DELETE FROM todos WHERE id=?', [id])
    return result.affectedRows
}

async function addTodo(todo, completed, list_id) {
    const created_at = new Date()
    const [result] = await pool.query('INSERT INTO todos (todo, completed, list_id, created_at) values (?, ?, ?, ?)', [todo, completed, list_id, new Date()])
    return {id: result.insertId, todo, completed, list_id, created_at}
    return todo
}

async function updateTodo(id, todo, completed, list_id) {
    const updated_at = new Date()
    const [result] = await pool.query('UPDATE todos SET todo=?, completed=?, list_id=?, updated_at=? WHERE id=?', [todo, completed, list_id, updated_at, id])
    return {id, todo, completed, list_id, updated_at}
}

module.exports = {
    getTodos,
    getTodoById, 
    deleteTodo, 
    addTodo,
    updateTodo
}
