import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line
export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  console.log(err.message);
  res.sendStatus(500).json({ message: 'Error' });
};
