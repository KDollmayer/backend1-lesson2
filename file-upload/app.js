const express = require("express")
const multer = require("multer")
const path = require("path")

const app = express()
const PORT = 3000

const upload = multer({dest: "uploads"})

app.use(upload.single("uploaded-file"))

app.get("/", (req, res) =>{
    
     res.sendFile(path.join(__dirname,"index.html"))
})



app.post("/upload", (req, res) => {
    console.log(req.file)
    res.redirect("/")
})
app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})