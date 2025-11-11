const express = require('express')
const connectDB = require('./config/dbConfig')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 5000

// DB CONNECTION
connectDB()

app.get("/", (req, res) => {
    res.json({
        message: "WELCOME TO CUSTOMER API 1.0"
    })
})


app.use("/api/employee", require("./routes/employeeRoute"))



app.get("/products", (req, res) => {
    res.json(products)
})


app.listen(PORT, () => console.log("SERVER IS RUNNING... : " + PORT))