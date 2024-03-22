import winston from 'winston';

/**
 * Global logger instance
 */
const logger = winston.createLogger({
    level: 'info', // Set the logging level
    format: winston.format.combine(
        winston.format.timestamp(), // Add timestamp to log entries
        winston.format.printf(({ level, timestamp, message, ...metadata }) => {
            const formattedTimestamp = timestamp.slice(0, 19).replace('T', ' '); // Truncate and format timestamp
            const customMessage = metadata.customMessage ? `[${metadata.customMessage}]` : ''; // Add custom message if present
            return `[${level.toUpperCase()}] [${formattedTimestamp}] ${message} ${customMessage}`;
        })
    ),
    transports: [
        // Log to file
        new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to error.log
        new winston.transports.File({ filename: 'logs.log' }) // Log other levels to combined.log
    ]
});

// If executing project in development, also log to console
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

export default logger
