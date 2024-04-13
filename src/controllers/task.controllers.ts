import { Request, Response, NextFunction } from 'express';
import { taskBusinessProcess } from '../businessPorcess';
import { TaskI, UserI } from '../interfaces';

declare module 'express' {
  interface Request {
    user?: UserI.User;
  }
}

export const create = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user!.id;
  const taskDataBody = req.body as TaskI.TaskRequestData;
  taskBusinessProcess
    .create(userId, taskDataBody)
    .then((task) => {
      res.json({ task });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const findAll = (_req: Request, res: Response, next: NextFunction) => {
  taskBusinessProcess
    .findAll()
    .then((task) => {
      res.json({ task });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
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
