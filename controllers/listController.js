const data = require('../data')
const pool = require('../db-conn')

async function getLists() {
    const [result]= await pool.query('SELECT * FROM lists');
    return result
}

async function getListById(id) {
    const [result]= await pool.query('SELECT * FROM lists WHERE id =?', [id]);
    return result[0]
}

async function deleteList(id) {
    const [result]= await pool.query('DELETE  FROM lists WHERE id =?', [id]);
    return result
}

async function addList(name) {
    const [result]= await pool.query('INSERT INTO lists (name, user_id, created_at) values (?, ?, ?)', [name, 1, new Date()]);
    return await getListById(result.insertId)
}

function updateList(id, name) {
    const idx = data.lists.findIndex(list => list.id == id)
    if (idx > -1) {
        data.lists[idx] = {...data.lists[idx], name}
        return data.lists[idx]
    }
    return false
}

module.exports = {
    getLists,
    getListById, 
    deleteList, 
    addList,
    updateList
}