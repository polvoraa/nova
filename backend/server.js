require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const authRoutes = require("./routes/auth")
const uploadRoutes = require("./routes/upload")
const projectRoutes = require("./routes/projects")

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Banco conectado"))
.catch(err => console.log(err))

app.use("/api/auth", authRoutes)
app.use("/api/upload", uploadRoutes)
app.use("/api/projects", projectRoutes)

app.get("/", (req,res)=>{
res.send("API Nova Studio funcionandoo")
})

app.listen(5000, ()=>{
console.log("Servidor rodando em http://localhost:5000")
})