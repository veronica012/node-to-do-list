const data = require('../data')

function getLists() {
    return data.lists;
}

function getListById(id) {
    return data.lists.find(list => list.id == id)
}

function deleteList(id) {
    const idx = data.lists.findIndex(list => list.id == id)
    if(idx > -1) {
        const deleted = data.lists.splice(idx, 1)
        return 1
    }
    return 0
}

function addList(name) {
    const list = {name, id:data.lists.length+1}
    return data.lists.unshift(list)
    return list
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