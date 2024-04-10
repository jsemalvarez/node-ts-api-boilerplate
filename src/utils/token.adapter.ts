import jwt from 'jsonwebtoken';
import { envs } from '../config/envs';

const JWT_SEED = envs.JWT_SEED;

// eslint-disable-next-line
export const generateToken = (payload: any, duration: string = '5h'): Promise<string | null> => {
  return new Promise((resolve) => {
    jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
      if (err) return resolve(null);

      resolve(token!);
    });
  });
};

export const validateToken = <T>(token: string): Promise<T | null> => {
  return new Promise((resolve) => {
    jwt.verify(token, JWT_SEED, (err, decoded) => {
      if (err) return resolve(null);

      resolve(decoded as T);
    });
  });
};
