import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';

import notesRouter from './routes/notes';
import {HTTP_CODES} from "./utils/http";
import {handleError} from "./utils/error";
import {connectToDatabase} from "./utils/database";
/**
 * Set up the Express app
 */
export const setupApp = async () => {
    // Connect to MongoDB
    await connectToDatabase();

    // Initialize Express app
    const app = express();

    // Middleware for parsing JSON bodies
    app.use(bodyParser.json());

    app.use('/api/v1/notes', notesRouter);

    app.use((req, res) => {
        handleError(res, new Error('Not found'), HTTP_CODES.NOT_FOUND);
    });

    return app;
}


// Export the Express app instance for testing
export default setupApp;
