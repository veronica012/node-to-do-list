const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('todos')
})

router.get('/:id([0-9]+)', (req, res) => {
    res.send('todo with id ' + req.params.id)
})

module.exports = router