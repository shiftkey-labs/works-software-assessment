import { Request, Response, NextFunction } from 'express';
import logger from '../utility/Logger';

/**
 * Incoming request loggin middleware
 * @param request Incoming request
 * @param response Response object
 * @param next Methor reference to call next middleware
 */
const requestLoggerMiddleware = (request: Request, response: Response, next: NextFunction) => {
    let incomingData = "";

    //log request parameter if available
    if (request.params && Object.keys(request.params).length > 0) {
        incomingData += JSON.stringify({ "requestParameters": request.params });
    }

    //log request body if available
    if (request.body) {
        incomingData += JSON.stringify(request.body);
    }

    //logger.info(request.method,request.originalUrl,incomingData);
    logger.info(`${request.method} ${request.originalUrl} ${incomingData}`);
    next();
};

export default requestLoggerMiddleware;
