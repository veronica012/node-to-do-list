const express = require('express')
const app = express()
const toDosRoutes = require('./routes/todos')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/todos', toDosRoutes)
app.listen(3000, () => console.log('server on port 3000'))