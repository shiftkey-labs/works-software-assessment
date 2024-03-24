import { Response } from 'express';
import {HTTP_CODES} from "./http";

export function handleError(res: Response, error: Error, statusCode = HTTP_CODES.INTERNAL_SERVER_ERROR) {
  return res.status(statusCode).json({ message: error.message });
}
