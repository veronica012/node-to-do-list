const express = require('express')
const router = express.Router()
const Controller = require('../controllers/todoController')

const logger = (req, res, next) => {
    if(req.params.id >= 100) {
        next(new Error('id cannot be > 100'))
    }
    next()
}

router.all('*', (req, res, next) => {
    console.log('All middlewere')
    next()
})

router.get('/', (req, res) => {
    res.json(Controller.getTodos())
})

router.get('/:id([0-9]+)', logger, (req, res) => {
    res.json(Controller.getTodoById(req.params.id))
})

router.delete('/:id([0-9]+)', (req, res) => {
    const deletedTodo =  Controller.deleteTodo(req.params.id)
    res.status(deletedTodo? 200: 404).json(deletedTodo? deletedTodo: null)
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.json(Controller.addTodo(req.body))
}) 

router.patch('/:id([0-9]+)', (req, res) => {
    console.log(req.body)
    res.json(Controller.updateTodo(req.params.id, req.body))
})

module.exports = router