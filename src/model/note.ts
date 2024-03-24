import { Document, Schema, model } from "mongoose";
interface Note extends Document {
  title: string;
  content: string;
}

/**
 * Note schema
 */
const NoteSchema = new Schema({
  title: String,
  content: String,
});

const NoteModel = model<Note>("Note", NoteSchema);

/**
 * Save a note
 * @param title
 * @param content
 */
const saveNote = async (title: string, content: string) => {
  const note = new NoteModel({ title, content });
  return note.save();
};

/**
 * Find all notes
 */
const findAllNotes = async () => {
  return NoteModel.find();
};

/**
 * Update a note
 * @param id
 * @param title
 * @param content
 */
const updateNote = async (id: string, title: string, content: string) => {
  return NoteModel.findByIdAndUpdate(id, { title, content }, { new: true });
};

/**
 * Delete a note
 * @param id
 */
const deleteNote = async (id: string) => {
  return NoteModel.findByIdAndDelete(id);
};

/**
 * Fetch a note by ID
 * @param id
 */
const fetchNoteById = async (id: string) => {
  return NoteModel.findById(id);
};

export {
  Note as INote,
  NoteModel,
  saveNote,
  findAllNotes,
  updateNote,
  deleteNote,
  fetchNoteById,
};
