import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config(
    {
        path:"./.env"
    }
)

const PORT = 3000 || process.env.PORT;

connectDB().then(()=>{
     app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`)
    })
}).catch((error)=>{
    console.log('mongoDB connection error',error)
})



