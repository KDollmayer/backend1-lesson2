const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000;
const STATIC_ROOT = path.join(__dirname, "static");


app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile("./index.html", {root: STATIC_ROOT});
});

app.post("/submit", (req, res) => {
    const {name, age, color} = req.body;
    res.send(`
        <h1>Hello ${name}!</h1>
        <p>Your favorite color is ${color}</p>
    `);
});

app.get("/submit", (req, res) => {
    const {name, age, color} = req.query;
    res.send(`
        <h1>Hello ${name}!</h1>
        <p>Your favorite color is ${color}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Started Express server on port ${PORT}`);
});
