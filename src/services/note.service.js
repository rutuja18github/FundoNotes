import Note from '../models/note.model';
import { client } from '../config/redis';

//create new note
export const createNewNote = async (body) => {
  await client.del('getAllData');
  const data = await Note.create(body);
  return data;
};

//get all notes
export const getAllNotes = async (userID) => {
  const data = await Note.find({ userID: userID });
  await client.set('getAllData', JSON.stringify(data));
  return data;
};

//get note by id
export const getNote = async (_id, userID) => {
  console.log(userID);
  const data = await Note.findOne({ _id: _id, userID: userID });
  return data;
};

//update note by _id
export const updateNote = async (_id, body, userID) => {
  await client.del('getAllData');
  const data = await Note.findByIdAndUpdate(
    {
      _id: _id,
      userID: userID
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete note by _id
export const deleteNote = async (_id, userID) => {
  await client.del('getAllData');
  const data = await Note.findByIdAndDelete({ _id: _id, userID: userID });
  return data;
};

//archive Note by _id
export const archiveNote = async (_id, userID) => {
  await client.del('getAllData');
  const data = await Note.findByIdAndUpdate(
    {
      _id: _id,
      userID: userID
    },
    {
      isArchive: true
    },
    {
      new: true
    }
  );
  return data;
};

//trash Note by _id
export const trashNote = async (_id, userID) => {
  await client.del('getAllData');
  const data = await Note.findByIdAndUpdate(
    {
      _id: _id,
      userID: userID
    },
    {
      isTrash: true
    },
    {
      new: true
    }
  );
  return data;
};