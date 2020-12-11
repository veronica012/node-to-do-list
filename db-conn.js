const mysql = require('mysql2/promise')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'express-todo-app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    password: 'root'
})

module.exports = pool