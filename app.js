require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const recipeRoutes=require("./routes/recipeRoutes")
const PORT = process.env.PORT || 7001
const app = express()
connectDB()
//middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use('/',recipeRoutes)
//routes
app.get("/",(req,res)=>{
res.send("this is the home page")
})
// app.listen(PORT, ()=>{
// console.log(`Server running on port ${PORT}`)
// })

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
    })
    mongoose.connection.on('error', err => {
    console.log(err)
    })
