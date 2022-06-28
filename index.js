require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const router = require("./router.js")
const cors =  require('cors')

const PORT = 5000;
const DB_URL = process.env.DB_URL
const app = express()

app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
