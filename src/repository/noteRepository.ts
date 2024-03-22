import mysql from 'mysql2';
import dotenv from 'dotenv';
import * as databaseConstant from '../utility/DatabaseConstants'

//configuring .env file
dotenv.config(); 

/**
 * MySQL database connection with Promise
 */
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

/**
 * Fetches all the rows from tbl_notes
 * @returns Query result
 */
const fetchAllNotes = async () => {
    const [rows] = await connection.query(databaseConstant.selectAllNoteQuery)
    return rows;
};

/**
 * Fetches note details based on id
 * @param id Id of note to fetch
 * @returns Query result
 */
const fetchNoteById = async (id: any)=> {
    const [rows] = await connection.query(databaseConstant.selectNoteByIdQuery, [id]);
    return rows;
};

/**
 * Updates note object based on id
 * @param note Updated note object
 * @returns Query result
 */
const updateNoteById=async(note:any) =>{
    const [result]=await connection.query(databaseConstant.updateNoteByIdQuery,[note.title,note.note_text,note.id])
    return result;  
}

/**
 * Deletes a note based on id
 * @param id Id of note to delete
 * @returns Query result
 */
const deleteNoteById=async(id)=>{
    const [result]=await connection.query(databaseConstant.deleteNoteByIdQuery,[id])
    return result
}

/**
 * Create new note entry in database
 * @param note New note object to create
 * @returns Query result
 */
const createNote=async (note)=>{
    const [result]=await connection.query(databaseConstant.createNoteQuery,[note.title,note.note_text])
    return result
}

/**
 * Exports
 */
export default {
    fetchAllNotes,
    fetchNoteById,
    updateNoteById,
    deleteNoteById,
    createNote
};
