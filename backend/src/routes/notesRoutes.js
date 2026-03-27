import express from "express";
import { getAllNotes, createNote, updatreNote,deleteNote } from "../controllers/notesControllers.js";

const router = express.Router();
router.get("/", getAllNotes); 
router.post("/", createNote);
router.put("/:id", updatreNote);
router.delete("/:id",deleteNote);

export default router;