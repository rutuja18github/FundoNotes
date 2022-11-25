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