import { Request, Response, NextFunction } from 'express';
import { UserI } from '../interfaces';
import { UserRole } from '../interfaces/user.interface';

declare module 'express' {
  interface Request {
    user?: UserI.User;
  }
}

export const validateRoleMiddleware = (requiredRole: UserI.UserRole) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: 'No Autenticado' });
    }
    const userRole = user.role || [];

    if (!userRole.includes(requiredRole)) {
      return res.status(403).json({ error: 'Acceso no autorizado' });
    }

    if (requiredRole === UserRole.USER) {
      req.params.id = user.id;
    }

    next();
  };
};
