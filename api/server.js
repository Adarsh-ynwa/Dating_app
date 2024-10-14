import express from "express"
import dotenv from "dotenv"

//routes 
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config

const app = express()

app.use(express.json())

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/matches",matchRoutes)
const PORT = process.env.PORT||5000

app.listen(PORT,()=>{
    console.log(`server running on port `+ PORT)
    connectDB()
})