import mongoose from "mongoose"

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongo connected : ${conn.connection.host};`)
    } catch (error) {
        console.log("error connecting mongodb: ",error)
        process.exit(1)
        
    }
}