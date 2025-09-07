import express from 'express'
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from './config/db.js'
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from "cors"
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 5001
const app = express()
const __dirname = path.resolve();

// middleware
if(process.env.NODE_ENV !== "production"){
    app.use(cors({
        origin:"http://localhost:5173",
    }))
}
app.use(express.json()) // this middleware will parse the json bodies
app.use(rateLimiter)

// simple prints
// app.use((req, res, next) => {
//    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//    next()
// })

app.use("/api/notes", notesRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../front/dist")));
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../front/dist/index.html"));
    })
}


connectDB().then( () => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT); 
})})
