const express = require("express")
const app = express()
const PORT = 3000

app.get("/hello", (req, res) =>{
    res.send("Hello world")
    // kan ej göra en return
})

app.get("/", (req, res) => {
    res.send("KING")
})

app.get("/greetings/:greeting", (req, res) => {
    console.log(req.params.greeting)
    res.send(`${req.params.greeting} hej världen `)
})
app.get("/users/:userId", (req, res) => {
    
    res.send(`HEJ ${req.params.userId}  `)
})

app.listen(PORT, () => {
    console.log(`Started Express at port ${PORT}`)
})