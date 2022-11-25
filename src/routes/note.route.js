import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';

const router = express.Router();

//route to create a new note
router.post('/create', newNoteValidator, noteController.createNewNote);

export default router;