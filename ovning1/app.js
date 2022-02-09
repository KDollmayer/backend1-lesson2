const express = require("express")
const PORT = 3000 
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World ")
})
app.get("/:gandalf", (req, res) => {

    res.send(`Hello ${req.params.gandalf}!`)
})



app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})