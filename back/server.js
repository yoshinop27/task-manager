import express from 'express'
import notesRoutes from "./routes/notesRoutes.js"

const app = express()
app.use("/api/notes", notesRoutes)


app.get("/api/notes", (req, res) => {
   res.send('you got 5 notes') 
})

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"Post updated successfully!"})
})

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Post updated successfully!"})
})

app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Post updated successfully!"})
})

app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001')
})