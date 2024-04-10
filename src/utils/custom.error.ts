import { ErrorI } from '../interfaces';

export const customError = (message: string, statusCode: number): ErrorI.CustomError => {
  const error = new Error(message) as ErrorI.CustomError;
  error.statusCode = statusCode;
  return error;
};
