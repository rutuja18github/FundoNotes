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
      message: 'new note is created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get all notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const getAllNotes = async (req, res, next) => {
  try {
    const data = await NoteService.getAllNotes(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'new note is created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get Note for particular user using id
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const getNote = async (req, res, next) => {
  try {
    const data = await NoteService.getNote(req.params._id);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Particular note fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};