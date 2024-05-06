import { Request, Response, NextFunction } from 'express';
import { taskBusinessProcess } from '../businessPorcess';
import { TaskI, UserI } from '../interfaces';
import { getPaginationOptionsTasks } from '../utils/pagination';

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

export const findAll = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  const { page, limit, searchQuery } = getPaginationOptionsTasks(req);

  taskBusinessProcess
    .findAll(searchQuery, page, limit, userId)
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
  const userId = req.params.userId;

  taskBusinessProcess
    .findById(todoId, userId)
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
  const userId = req.params.userId;
  const taskUpdateData = req.body as TaskI.TaskUpdateData;
  taskBusinessProcess
    .update(todoId, taskUpdateData, userId)
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
  const userId = req.params.userId;
  taskBusinessProcess
    .remove(todoId, userId)
    .then((taskIdRemoved) => {
      res.json({ message: `task ${taskIdRemoved} removed successfully` });
    })
    // eslint-disable-next-line
    .catch((error: any) => {
      next(error);
    });
};
