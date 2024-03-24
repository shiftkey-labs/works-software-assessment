// Import necessary modules
import config from "./config";
import setupApp from "./app";
import {Express} from "express";

/**
 * Start the Express server
 */
export const startServer = async (app: Express) => {
    app.listen(config.PORT, () => {
        console.log(`Server is running on port ${config.PORT}`);
    });
};

/**
 * Gracefully shut down the server
 */
export const stopServer = async (server: any) => {
    server.close();
};

// Start the server if not running in a test environment
if (process.env.NODE_ENV !== 'test') {
    setupApp()
        .then(startServer)
        .catch((error) => {
        console.error('Error starting server:', error);
    });
}