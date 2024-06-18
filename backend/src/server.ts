import express from "express"
import cors from "cors"
import router from "./route/route"
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api", router)

const PORT = process.env.port 

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))