const express = require("express");

const app = express();
const PORT = 3000;

const HEROES = [
    {name: "Frodo", origin: "the shire"},
    {name: "merry", origin: "the shire"},
    {name: "pippen", origin: "the shire"},
    {name: "gandalf", origin: "Dont know"},
]

app.get("/", (req, res) => {
    const data = {
        title: "Lord of the rings",
        heroes: HEROES
    }
    res.render("index.ejs", data)
})

app.get("/:heroName", (req, res) => {
    const heroName = req.params.heroName
    const hero = HEROES.filter(({name}) => name === heroName)[0]
    res.render("hero.ejs", hero)
})

app.listen(PORT, () => {
    console.log(`Started server on port: ${PORT}`)
});
