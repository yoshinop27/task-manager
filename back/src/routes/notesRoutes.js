import express from "express"
import { getAllNotes, createNote, updateNote, deleteNote, getNoteById } from "../controllers/notesController.js"

const router = express.Router()

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote)
router.delete("/:id", deleteNote)
router.put("/:id", updateNote)

export default router;