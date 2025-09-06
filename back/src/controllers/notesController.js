import Note from '../models/notes.js'


export const getAllNotes = async (req,res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error('Error in getAllnotes controller:', error)
        res.status(500).json({message: "Internal server error"})
    }}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const note = new Note({title, content})
        const savedNote = await note.save()
        res.status(201).json(savedNote)
    } catch(error) {
        console.error('Error in createNote controller:', error)
        res.status(500).json({message: "Internal server error"})
    }}

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true})
        if (!updatedNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json({message:"Post updated successfully! literally"})
    } catch (error) {
        console.error('Error in updateNote controller:', error)
        res.status(500).json({message: "Internal server error"})
    }}

export const deleteNote = async (req, res) => {
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if (!deleteNote) return res.status(404).json({message: "Note not found"})
        res.status(200).json({message:"Post deleted successfully!"})
    } catch(error){
        console.error('Error in deleteNote controller:', error)
        res.status(500).json({message: "Internal server error"})
    }}

export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({message: "Note not found"})
        res.status(200).json(note)
    } catch (error) {
        console.error('Error in getNoteById controller:', error)
        res.status(500).json({message: "Internal server error"})
    }}