import Note from '../models/note.model';

//create new note
export const createNewNote = async (body) => {
    const data = await Note.create(body);
    return data;
};

//get all notes
export const getAllNotes = async (userID) => {
    const data = await Note.find(userID);
    return data;
};

//get note by id
export const getNote = async (_id,userID) => {
    const data = await Note.findById(_id,userID);
    return data;
};

//update note by _id
export const updateNote = async (_id,body) => {
    const data = await Note.findOneAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
};