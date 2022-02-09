const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: true}))

const entries = []
app.post("/submit", (req, res) => {
    const {entry, title} = req.body
    entries.push({title, entry, date: new Date()})
    res.redirect("/")
    console.log(entries)
})

const renderEntry = ({title, entry, date}) => {
    return `
    <div>
    <h2>${title}</h2>
    <p><em>${date}</em></p>
    <p> ${entry}</p>
    </div>
    `
}

app.get("/", (req, res) => {

    

    res.send(`
    <h1>Diary</h1>

    ${entries.map(renderEntry)}


    <h2>New entry</h2> <br/>
    <form method= "POST" action="/submit">
     Title: <input type="text" name="title"> <br/>

     <textarea name="entry"></textarea> <br/>
     <input type="submit" value= "save">
    </form>

    `)
})


app.listen(PORT, () =>{
    console.log(`server started on port ${PORT}`)
})
