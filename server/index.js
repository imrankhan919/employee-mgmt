const express = require('express')
require('dotenv').config()
const products = require("./products")

const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.json({
        message: "WELCOME TO CUSTOMER API 1.0"
    })
})



app.get("/products", (req, res) => {
    res.json(products)
})


app.listen(PORT, () => console.log("SERVER IS RUNNING... : " + PORT))