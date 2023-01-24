import express from "express"
import BookRoute from "./routes/BookRoute.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

const PORT = 5000

app.get("/", (req,res) => {
    res.send("Server is Running ⚡⚡⚡")
})

app.use("/api/v1", BookRoute)

app.listen(PORT, (req, res) =>{
    console.log("server is running on PORT=>", PORT)
})