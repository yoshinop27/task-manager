import express from "express"
import { getAllNotes, createNote, updateNote, deleteNote } from "../controllers/notesController.js"

const router = express.Router()

export default router;

router.get("/", getAllNotes);
router.post("/", createNote)
router.delete("/:id", updateNote)
router.put("/:id", deleteNote)
