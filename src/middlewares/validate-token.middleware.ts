import { Request, Response, NextFunction } from 'express';
import { tokenAdapter } from '../utils';
import { userService } from '../services';
import { UserI } from '../interfaces';

declare module 'express' {
  interface Request {
    user?: UserI.User;
  }
}

export const validateTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.header('Authorization');
  if (!authorization) return res.status(401).json({ error: 'No token provided' });
  if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' });

  const tokenFromRequest = authorization.split(' ').at(1) || '';

  try {
    const payload = await tokenAdapter.validateToken<{ id: string }>(tokenFromRequest);
    if (!payload) return res.status(401).json({ error: 'Invalid token' });

    const user = await userService.findOne(payload.id);
    if (!user) return res.status(401).json({ error: 'Invalid user' });

    const isLastSavedToken = tokenFromRequest === user.token;
    if (!isLastSavedToken) {
      return res.status(401).json({ error: 'Expired token' });
    }

    req.user = user as UserI.User;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
