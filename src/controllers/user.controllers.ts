import { Request, Response } from 'express';

export const register = (req: Request, res: Response) => {
  const newUser = req.body;
  res.json({ message: 'endpoint register', user: newUser });
};

export const findAll = (_req: Request, res: Response) => {
  res.json({ message: 'endpoint find-all users' });
};

export const findOne = (req: Request, res: Response) => {
  const userId = req.params.userId;
  res.json({ message: `endpoint get user by id: ${userId}` });
};

export const update = (req: Request, res: Response) => {
  const userId = req.params.userId;
  res.json({ message: `endpoint update user by id: ${userId}` });
};

export const remove = (req: Request, res: Response) => {
  const userId = req.params.userId;
  res.json({ message: `endpoint remove user by id: ${userId}` });
};

export const login = (req: Request, res: Response) => {
  const userlogin = req.body;
  res.json({ message: `endpoint endpoint login`, user: userlogin });
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
