import { NextFunction, Request, Response } from 'express';
import { ErrorI } from '../interfaces';
import { loggerAdapter } from '../utils/logger.adapter';

// eslint-disable-next-line
export const errorHandler = (err: ErrorI.CustomError, req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = statusCode < 500 ? err.message : 'Server error';

  const origin = err.origin || err.stack || 'unknown';
  loggerAdapter.error(`Error en la ruta ${req.method} ${req.url}: ${err.message}`, origin);

  res.status(statusCode).json({ message });
};
