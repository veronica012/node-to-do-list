const data = require('../data')

function getLists() {
    return data.lists;
}

function getListById(id) {
    return data.listss.find(list => list.id == id)
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
    const newList = name
    return data.lists.unshift(newList)
    return newList
}

function updateList(id, name) {
   const oldList = getListById(id)
   if(oldList) {
        data.lists[id] = {...oldList, name}
        return data.lists[id]
   }
   return false
}

module.exports = {
    getList,
    getListById, 
    deleteList, 
    addList,
    updateList
}