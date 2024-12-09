import express from 'express'
import {getNotes,getSingleNote,updateNote,deleteNote,createNote} from '../controllers/NoteControllers.js'

const router = express.Router();

router.route("/").get(getNotes).post(createNote)
router.route("/:id").get(getSingleNote).put(updateNote).delete(deleteNote)


export default router;