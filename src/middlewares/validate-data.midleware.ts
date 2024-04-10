import { NextFunction, Request, Response } from 'express';
import { Schema, ValidationResult } from 'joi';

export interface ValidateEschemaI {
  body?: Schema;
  params?: Schema;
  query?: Schema;
}
type ValidKeysI = 'body' | 'params' | 'query';
const validKeys: string[] = ['body', 'params', 'query'];

export const validateDataMiddleware = (schema: ValidateEschemaI) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const errorMessages: string[] = [];

    const validKeysFiltered = Object.keys(schema).filter((key) => validKeys.includes(key)) as ValidKeysI[];

    validKeysFiltered.forEach((key) => {
      const validation: ValidationResult = schema[key]!.validate(req[key], { abortEarly: false });
      if (validation.error) {
        const errors = validation.error.details.map((error) => error.message.replace(/"/g, ''));
        errorMessages.push(...errors);
      }
    });

    if (errorMessages.length > 0) {
      return res.status(400).json({ errors: errorMessages });
    }

    next();
  };
};
