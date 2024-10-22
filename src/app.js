import express from "express";
import cors from "cors";




const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// common middlewares
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({limit:'16kb', extended: true}))
app.use(express.static('public'))

// import router
import healthCheckRoute from "./routes/healthcheck.routes.js"

// route

app.use("/api/v1/healthCheck",healthCheckRoute)
// app.get("/api/v1/healthCheck",healthCheckRoute)

export { app }