import { Request, Response } from 'express';
import { userBusinessProcess } from '../businessPorcess';
import { UserI } from '../interfaces';

export const register = (req: Request, res: Response) => {
  const newUser: UserI.UserCreationData = req.body;

  const userCreated = userBusinessProcess.register(newUser);

  res.json({ user: userCreated });
};

export const findAll = (_req: Request, res: Response) => {
  const users: UserI.User[] = userBusinessProcess.findAll();
  res.json({ users });
};

export const findOne = (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = userBusinessProcess.findOne(userId);
  res.json({ user });
};

export const update = (req: Request, res: Response) => {
  const userId: string = req.params.userId;
  const userData: UserI.UserUpdateData = req.body;
  const user = userBusinessProcess.update(userId, userData);
  res.json({ user });
};

export const remove = (req: Request, res: Response) => {
  const userId = req.params.userId;
  const userIdRemoved = userBusinessProcess.remove(userId);
  res.json({ message: `user ${userIdRemoved} removed successfully` });
};

export const login = (req: Request, res: Response) => {
  const userCredentials: UserI.UserCredentialsData = req.body;
  const userLogged = userBusinessProcess.login(userCredentials);
  res.json({ userLogged });
};

export const refreshToken = (req: Request, res: Response) => {
  const oldToken = req.body;
  res.json({ message: `endpoint refresh tokens`, token: oldToken });
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
