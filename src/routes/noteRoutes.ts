import express, { Router } from 'express';
import noteController from '../controllers/noteController';

/**
 * Route app object
 */
const router: Router = express.Router();

/**
 * Route -> note/ -> Get all notes
 */
router.get("/", noteController.getAllNotes)

/**
 * Route -> note/1 -> Get note from id
 */
router.get("/:id",noteController.getNoteById)

/**
 * Route -> note/update -> update note
 * note object in request body
 */
router.patch("/update",noteController.updateNote)

/**
 * Route -> note/delete/1 -> Delete note
 */
router.delete("/delete/:id",noteController.deleteNote)

/**
 * Route -> note/create -> Get all notes
 * note object in request body
 */
router.post("/create",noteController.createNote)

/**
 * Exports
 */
export default router;