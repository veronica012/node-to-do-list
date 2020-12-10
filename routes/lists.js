const express = require('express')
const router = express.Router()
const Controller = require('../controllers/listController')

router.get('/', (req, res) => {
    res.json(Controller.getLists())
})

router.get('/:id([0-9]+)', (req, res) => {
    const result = Controller.getListById(req.params.id)
    res.status(result? 200: 404).json(result? result: null)
})

router.delete('/:id([0-9]+)', (req, res) => {
    const deletedList =  Controller.deleteList(req.params.id)
    res.status(deletedList? 200: 404).json(deletedList? deletedList: null)
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.json(Controller.addList(req.body))
}) 

router.patch('/:id([0-9]+)', (req, res) => {
    console.log(req.body, req.params.id)
    const updatedList = Controller.updateTodo(req.params.id, req.body)
    console.log(updatedList)
    res.status(updatedList? 200: 404).json(updatedList? updatedList: 'not found')

})

module.exports = router