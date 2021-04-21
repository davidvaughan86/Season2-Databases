const express = require('express')
const app = express()
const cors = require('cors')
//require the db file by the instance name
const pool = require('./db')
const PORT = process.env.PORT || 7007
console.log(process.env.PORT)

app.use(express.json());
app.use(cors())

app.get('/', (req,res) => {
    res.send('welcome to the node server')

    // DO THE SQL COKMANDS THAN GRAB THAT INFO FRO THE REQUEST

    // SEND IT BACK IN THE RES
})

// routes that we define for out server

// CRUD

//create todo list
app.post('/todo', async (req,res) => {
    try {
        const { description } = req.body
        const id = req.params
        console.log(id)
        // this is inserting into the <table> and the (column) with a value(), [descriptipn] to set the variable decalred
        const newTodoInDB = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]
        );
        console.log(req.body)
        res.json(newTodoInDB)
        // res.status(200)
    } catch (err) {
        console.log(err.message)
    }
    

})

//read the todo list
app.get("/read_todos", async(req,res) => {
    try {
        
        // this is inserting into the <table> and the (column) with a value(), [descriptipn] to set the variable decalred
        const readTodofromDB = await pool.query("SELECT * from todo")
        
       
        res.json(readTodofromDB)
        // res.status(200)
    } catch (err) {
        console.log(err.message)
    }
})
app.get('/read_todos/:id', async (req,res) => {
    try {
        
        const { id } = req.params
        console.log(id)
        // this is inserting into the <table> and the (column) with a value(), [descriptipn] to set the variable decalred
        const readSingleTodoFromDB = await pool.query("SELECT *  from todo WHERE todo_id = ($1)", [id]
        );
        console.log(req.body)
        res.json(readSingleTodoFromDB)
        // res.status(200)
    } catch (err) {
        console.log(err.message)
    }
    
})

//update the todo list




//delete the todo list



app.listen(PORT, () => console.log(`running on ${PORT}`))