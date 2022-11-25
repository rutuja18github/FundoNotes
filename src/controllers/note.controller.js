import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';


/**
 * Controller to create a new note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createNewNote = async (req, res, next) => {
  try {
    const data = await NoteService.createNewNote(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'new note created successfully'
    });
  } catch (error) {
    next(error);
  }
};