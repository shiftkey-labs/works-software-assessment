import {NoteModel, saveNote, findAllNotes, updateNote, deleteNote, fetchNoteById} from '../../model/note';

describe('NoteModel functions', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should save a note', async () => {
        const mockNote = {
            title: 'Test Title',
            content: 'Test Content',
        };
        const saveMock = jest.fn().mockResolvedValue(mockNote);
        NoteModel.prototype.save = saveMock;

        const result = await saveNote(mockNote.title, mockNote.content);

        expect(saveMock).toHaveBeenCalledWith();
        expect(result).toEqual(mockNote);
    });

    it('should find all notes', async () => {
        const mockNotes = [
            {title: 'Note 1', content: 'Content 1'},
            {title: 'Note 2', content: 'Content 2'},
        ];
        const findMock = jest.fn().mockResolvedValue(mockNotes);
        NoteModel.find = findMock;

        const result = await findAllNotes();

        expect(findMock).toHaveBeenCalledWith();
        expect(result).toEqual(mockNotes);
    });

    it('should update a note', async () => {
        const mockNoteId = 'mockId';
        const mockUpdatedNote = {
            title: 'Updated Title',
            content: 'Updated Content',
        };
        const findByIdAndUpdateMock = jest.fn().mockResolvedValue(mockUpdatedNote);
        NoteModel.findByIdAndUpdate = findByIdAndUpdateMock;

        const result = await updateNote(mockNoteId, mockUpdatedNote.title, mockUpdatedNote.content);

        expect(findByIdAndUpdateMock).toHaveBeenCalledWith(mockNoteId, {
            title: mockUpdatedNote.title,
            content: mockUpdatedNote.content
        }, {new: true});
        expect(result).toEqual(mockUpdatedNote);
    });

    it('should delete a note', async () => {
        const mockNoteId = 'mockId';
        const deletedNote = {
            _id: mockNoteId,
            title: 'Deleted Title',
            content: 'Deleted Content',
        };
        const findByIdAndDeleteMock = jest.fn().mockResolvedValue(deletedNote);
        NoteModel.findByIdAndDelete = findByIdAndDeleteMock;

        const result = await deleteNote(mockNoteId);

        expect(findByIdAndDeleteMock).toHaveBeenCalledWith(mockNoteId);
        expect(result).toEqual(deletedNote);
    });

    it('should fetch a note by ID', async () => {
        const noteId = 'mockNoteId';
        const mockNote = {
            title: 'Test Title',
            content: 'Test Content',
        };
        const findByIdMock = jest.fn().mockResolvedValue(mockNote);
        NoteModel.findById = findByIdMock;

        const result = await fetchNoteById(noteId);

        expect(findByIdMock).toHaveBeenCalledWith(noteId);
        expect(result).toEqual(mockNote);
    });
});
