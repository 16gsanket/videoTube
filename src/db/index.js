import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        console.log("attemtping to connect DB to ", process.env.MONGO_URI , DB_NAME);
        
        const connectionInstances = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)        
        console.log('db connected');
        
        console.log(`MongoDB Connected: ${connectionInstances.connection.host}`)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
 
        process.exit(1);
      }
}

export default connectDB;