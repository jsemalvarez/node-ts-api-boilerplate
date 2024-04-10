import { NextFunction, Request, Response } from 'express';
import { ErrorI } from '../interfaces';

// eslint-disable-next-line
export const errorHandler = (err: ErrorI.CustomError, req: Request, res: Response, _next: NextFunction) => {
  console.error(`Error en la ruta ${req.method} ${req.url}: ${err.stack || err.message}`);
  const statusCode = err.statusCode || 500;
  const message = statusCode < 500 ? err.message : 'Server error';
  res.status(statusCode).json({ message });
};
