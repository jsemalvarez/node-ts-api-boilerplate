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
  const taskDataBody = req.body as TaskI.TaskCreationData;
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
    .then((tasks) => {
      res.json({ tasks });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const findAllByUserId = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.user!.id;
  taskBusinessProcess
    .findAllByUserId(userId)
    .then((tasks) => {
      res.json({ tasks });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const findOne = (req: Request, res: Response, next: NextFunction) => {
  const todoId = req.params.taskId as string;
  taskBusinessProcess
    .findById(todoId)
    .then((task) => {
      res.json({ task });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const update = (req: Request, res: Response, next: NextFunction) => {
  const todoId = req.params.taskId as string;
  const taskUpdateData = req.body as TaskI.TaskUpdateData;
  taskBusinessProcess
    .update(todoId, taskUpdateData)
    .then((task) => {
      res.json({ task });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};

export const remove = (req: Request, res: Response, next: NextFunction) => {
  const todoId = req.params.taskId as string;
  taskBusinessProcess
    .remove(todoId)
    .then((taskIdRemoved) => {
      res.json({ message: `task ${taskIdRemoved} removed successfully` });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};
