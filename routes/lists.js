const express = require('express')
const router = express.Router()
const Controller = require('../controllers/listController')
const todoController = require('../controllers/todoController')



router.get('/', async (req, res) => {
    try {
        const result = await Controller.getLists()
        res.json(result)
    } catch (e) {
        res.status(500).send(e.toString())
    }
})

// router.get('/:list_id([0-9]+)/todos', async (req, res) => {
//     try {
//         const result = await todoController.getTodosByListId(req.params.list_id)
//         res.json(result)
//     } catch (e) {
//         res.status(500).send(e.toString())
//     }
// })

router.get('/:id([0-9]+)', async (req, res) => {
    try {
        const result = await Controller.getListById(req.params.id)
        res.status(result? 200: 404).json(result? result: null)
    } catch (e) {
        res.status(500).send(e.toString())
    }
})

router.delete('/:id([0-9]+)', async (req, res) => {
    try {
        const deletedList =  await Controller.deleteList(req.params.id)
        res.status(deletedList? 200: 404).json(deletedList? deletedList: null)
    } catch (e) {
        res.status(500).send(e.toString())
    }
})

router.post('/', async (req, res) => {
    try {
        const result = await  Controller.addList(req.body.name)
        res.json(result)
    } catch (e) {
        res.status(500).send(e.toString())
    }
}) 

router.patch('/:id([0-9]+)', async (req, res) => {
    try{
        const updatedList = await Controller.updateList(req.params.id, req.body.name)
        res.status(updatedList? 200: 404).json(updatedList ? updatedList: 404)
    } catch (e) {
        res.status(500).send(e.toString())
    }
})

module.exports = router
