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

router.get('/', async (req, res) => {
    try {
        const result = await Controller.getTodos()
        res.json(result)
    } catch (e) {
        res.status(500).send(e.toString())
    }
})

router.get('/:id([0-9]+)', logger, async (req, res) => {
   // res.json(Controller.getTodoById(req.params.id))
   try {
        const result = await Controller.getTodoById(req.params.id)
        res.status(result? 200: 404).json(result? result: null)
   } catch (e) {
        res.status(500).send(e.toString())
   }
})

router.delete('/:id([0-9]+)', async (req, res) => {
    try {
        const deletedTodo =  await Controller.deleteTodo(req.params.id)
        res.status(deletedTodo? 200: 404).json(deletedTodo? deletedTodo: null)
    } catch (e) {
        res.status(500).send(e.toString())
    }
})

router.post('/', async (req, res) => {
    try {
        const result = await  Controller.addTodo(req.body)
        res.json(result)
    } catch (e) {
        res.status(500).send(e.toString())
    }
}) 

router.patch('/:id([0-9]+)', async (req, res) => {
    try{
        const updatedTodo = await Controller.updateTodo(req.params.id, req.body)
        res.status(updatedTodo? 200: 404).json(updatedTodo ? updatedTodo: 404)
    } catch (e) {
        res.status(500).send(e.toString())
    }
})

module.exports = router
