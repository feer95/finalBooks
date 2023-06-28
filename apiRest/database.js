const mysql = require("mysql2")

const pool = mysql.createPool(
    {
        host:                   "localhost",
        user:                   "root",
        password:               "My.12345.Sql",
        database:               "appBooks",
        waitforConnections:     true,
        connectionLimit:        10,
        maxIdle:                10,
        idleTimeout:            60000,
        queueLimit:             0
    }).promise();

console.log("Conexión creada");
module.exports = {pool};