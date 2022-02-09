const express = require("express");
const {BOOKS} = require("./books")
const app = express();
const PORT = 3000;



app.get("/", (req, res ) => {

    
    res.render("index.ejs", {BOOKS})
})

app.get("/:bookId", (req, res) => {
    const bookId = req.params.bookId
    const book = BOOKS.filter(({id}) => id == bookId)[0]
    if (book){
        res.render("hero.ejs", {book})
    } else {
        res.status(404).send("404 not found") 
    }
    

   
})

app.listen(PORT, () => {
    console.log(`Started server on port: ${PORT}`)
});