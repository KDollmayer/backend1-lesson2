const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const { todo } = require("./todo")


const PORT = 3000




app.get(`/delete/:todoTitle`, (req, res) => {
    const todoTitle = req.params.todoTitle
    const index = todo.findIndex((item) => {
        return item.title === todoTitle
    })
    if (index !== -1) {
        todo.splice(index, 1)
    }
    res.redirect("/")
})
app.use(bodyParser.urlencoded({extended: true}))

app.post("/submit", (req, res) => {
    const {title, todotext} = req.body
    todo.push({title, todotext, date: new Date()})
    res.redirect("/")
    
})

app.get("/", (req, res) => {

    
   res.render("index.ejs", {todo})
})




app.listen(PORT, () => {
    console.log(`Server started port ${PORT}`)
})