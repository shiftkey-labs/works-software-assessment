import noteRepository from '../repository/NoteRepository';
import {ResponseModel} from '../utility/ResponseModel'
import logger from '../utility/Logger'

/**
 * Gets all the notes
 * @param request Incoming request object
 * @param response Response object
 */
const getAllNotes = async (request, response)=> {
    const responseModel=new ResponseModel();
    try {
        const result = await noteRepository.fetchAllNotes()
        responseModel.isSuccess=true
        responseModel.responseData=result
        responseModel.message="All notes fetched."
    } catch (error) {
        logger.error(error)
        responseModel.responseData=error
        responseModel.message="Unable to fetch all notes."
    }

    response.json(responseModel)
};

/**
 * Gets note by note id
 * @param request Incoming request object
 * @param response Response object
 */
const getNoteById = async (request, response)=> {
    const responseModel=new ResponseModel();
    try {
        const result = await noteRepository.fetchNoteById(request.params.id)
        responseModel.isSuccess=true
        responseModel.responseData=result    
        responseModel.message="Note fetched successfully."
    } catch (error) {
        logger.error(error)
        responseModel.responseData=error
        responseModel.message="Unable to fetch note by id."
    }
    response.json(responseModel);
};

/**
 * Update row based on id
 * @param request Incoming request object
 * @param response Response object
 */
const updateNote=async (request,response)=>{
    const responseModel=new ResponseModel();
    try{
        const result=await noteRepository.updateNoteById(request.body)
        if(!(result['affectedRows']>0)){
            throw result['info']
        }else{
            const result=await noteRepository.fetchNoteById(request.body.id)
            responseModel.responseData=result
            responseModel.message="Note updated."
            responseModel.isSuccess=true
        }    
    }catch(error){
        logger.error(error)
        responseModel.responseData=error
        responseModel.message="Unable to update the note."
    }
    response.json(responseModel)
}

/**
 * Delete note based on id
 * @param request  Incoming request object
 * @param response Response object
 */
const deleteNote=async (request,response)=>{
    const responseModel=new ResponseModel();
    try{
        var result= await noteRepository.deleteNoteById(request.params.id)  
        if(! (result['affectedRows']>0)){
            throw "Note not found"
        }else{
            responseModel.message="Note "+request.params.id+" deleted."  
            responseModel.isSuccess=true
        }
   
    }catch(error){
        logger.error(error)
        responseModel.responseData=error
        responseModel.message="Unable to delete note."
    }
    response.json(responseModel)
}

/**
 * Creates new node
 * @param request Incoming request object
 * @param response Response object
 */
const createNote= async (request,response)=>{
    const responseModel=new ResponseModel();
    try{
        const result=await noteRepository.createNote(request.body)
        if(result['insertId']>0){        
            responseModel.responseData=await noteRepository.fetchNoteById(result['insertId'])
            responseModel.message="Note created successfully." 
            responseModel.isSuccess=true
        }else{
            throw "Note not created."
        }
    
    }catch(error){
        logger.error(error)
        responseModel.responseData=error
        responseModel.message="Unable to create note."
    }
    response.json(responseModel)
}

/**
 * Exports
 */
export default {
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
    createNote
}
