import { Request, Response } from 'express';

export const create = (_req: Request, res: Response) => {
  res.json({ message: 'endpoint create todo' });
};

export const findAll = (_req: Request, res: Response) => {
  res.json({ message: 'endpoint find all todos' });
};

export const findOne = (req: Request, res: Response) => {
  const todoId = req.params.todoId;
  res.json({ message: `endpoint find one todo by id: ${todoId}` });
};

export const update = (req: Request, res: Response) => {
  const todoId = req.params.todoId;
  res.json({ message: `endpoint update todo by id: ${todoId}` });
};

export const remove = (req: Request, res: Response) => {
  const todoId = req.params.todoId;
  res.json({ message: `endpoint remove todo by id: ${todoId}` });
};
