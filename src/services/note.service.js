import Note from '../models/note.model';

//create new note
export const createNewNote = async (body) => {
    const data = await Note.create(body);
    return data;
};