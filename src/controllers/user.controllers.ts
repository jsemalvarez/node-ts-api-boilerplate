import { Request, Response } from 'express';

export const register = (_req: Request, res: Response) => {
  res.json({ message: 'endpoint register' });
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
  res.json({ message: `endpoint endpoint login` });
};

export const refreshTokens = (req: Request, res: Response) => {
  res.json({ message: `endpoint refresh tokens` });
};

export const forgotTokens = (req: Request, res: Response) => {
  res.json({ message: `endpoint forgot tokens` });
};

export const resetTokens = (req: Request, res: Response) => {
  res.json({ message: `endpoint reset tokens` });
};

export const sendVerifiactionEmail = (req: Request, res: Response) => {
  res.json({ message: `endpoint send-verifiaction-email` });
};

export const verifyEmail = (req: Request, res: Response) => {
  res.json({ message: `endpoint verify-email` });
};
