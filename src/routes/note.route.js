import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';


const router = express.Router();

//route to create a new note
router.post('/create', newNoteValidator, noteController.createNewNote);

//route to get all notes
router.get('/allNote' ,noteController.getAllNotes);

//router to get a note by id
router.get('/:_id', noteController.getNote);

//route to update a note
router.put('/:_id', noteController.updateNote);

export default router;