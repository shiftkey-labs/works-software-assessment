/**
 * Query to fetch all notes
 */
export const selectAllNoteQuery="SELECT * FROM tbl_notes"

/**
 * Query to fetch note from id
 */
export const selectNoteByIdQuery="SELECT * FROM tbl_notes WHERE id = ?"

/**
 * Query to udpate note
 */
export const updateNoteByIdQuery="UPDATE tbl_notes SET title=?, note_text=?, updated_at=NOW() WHERE id=?"

/**
 * Query to delte note using id
 */
export const deleteNoteByIdQuery="DELETE FROM nodedb.tbl_notes WHERE id=?"

/**
 * Query to create note
 */
export const createNoteQuery="INSERT INTO nodedb.tbl_notes (title, note_text, created_at, updated_at)VALUES(?, ?, NOW(), NOW());"