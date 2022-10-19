const {MongoClient} = require("mongodb")
const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Homepage")
})

app.get("/login", (req, res) => {
    res.send("admin")
})


app.listen(3000)