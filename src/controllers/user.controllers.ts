import { NextFunction, Request, Response } from 'express';
import { userBusinessProcess } from '../businessPorcess';
import { UserI } from '../interfaces';
import { getPaginationOptions } from '../utils/pagination';

declare module 'express' {
  interface Request {
    user?: UserI.User;
  }
}

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const newUser: UserI.UserCreationData = req.body;

  userBusinessProcess
    .register(newUser)
    .then((userCreated) => {
      res.json({ user: userCreated });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const findAll = (req: Request, res: Response, next: NextFunction) => {
  const { page, limit } = getPaginationOptions(req);
  userBusinessProcess
    .findAll(page, limit)
    .then((users) => {
      res.json({ users });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const findOne = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  userBusinessProcess
    .findOne(userId)
    .then((user) => {
      res.json({ user });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const update = (req: Request, res: Response, next: NextFunction) => {
  const userId: string = req.params.userId;
  const userData: UserI.UserUpdateData = req.body;

  userBusinessProcess
    .update(userId, userData)
    .then((user) => {
      res.json({ user });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  userBusinessProcess
    .remove(userId)
    .then((userIdRemoved) => {
      res.json({ message: `user ${userIdRemoved} removed successfully` });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  userBusinessProcess
    .logout(userId)
    .then(() => {
      res.json({ message: `user ${userId} logout successfully` });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  const userCredentials: UserI.UserCredentialsData = req.body;

  userBusinessProcess
    .login(userCredentials)
    .then((user) => {
      res.json({ user });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const refreshToken = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user!.id as string;

  userBusinessProcess
    .refreshToken(userId)
    .then((token) => {
      res.json({ token });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const forgotPassword = (req: Request, res: Response) => {
  const email = req.body.email;
  res.json({ message: `endpoint forgot password for ${email}` });
};

export const resetPassword = (req: Request, res: Response) => {
  const password = req.body.password;
  res.json({ message: `endpoint reset pasword:${password}` });
};

export const sendVerifiactionEmail = (_req: Request, res: Response) => {
  res.json({ message: `endpoint send-verifiaction-email` });
};

export const verifyEmail = (_req: Request, res: Response) => {
  res.json({ message: `endpoint verify-email` });
};
