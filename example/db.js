const Pool = require('pg').Pool
//or
// const { Pool } = require('pg')

// pg will allow us to connect an isntance of our database ( a pool class/instance/object)
// allows our server to send requests to it
const pool = new Pool ({
    user: "king",
    password: "",
    host: "localhost",
    port: 5432,
    database:"todolist"
})

// set the exports to the the class isntance created
module.exports = pool