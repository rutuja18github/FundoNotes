import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';
import  {userAuth}  from '../middlewares/auth.middleware';
import { redisCheck } from '../middlewares/redis.middleware';

const router = express.Router();

//route to create a new note
router.post('/create', newNoteValidator,userAuth, noteController.createNewNote);

//route to get all notes
router.get('/allNote',userAuth,redisCheck ,noteController.getAllNotes);

//router to get a note by id
router.get('/:_id',userAuth, noteController.getNote);

//route to update a note
router.put('/:_id',userAuth, noteController.updateNote);

//route to delete a note
router.delete('/:_id',userAuth, noteController.deleteNote);

//route to archieve a note
router.put('/:_id/archive',userAuth, noteController.archiveNote);

//route to trash a note
router.put('/:_id/trash',userAuth, noteController.trashNote);

export default router;