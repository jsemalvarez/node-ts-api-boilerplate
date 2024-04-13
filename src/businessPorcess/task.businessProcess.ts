import { TaskI } from '../interfaces';
import { taskService } from '../services';

export const create = async (userId: string, createTaskBody: TaskI.TaskRequestData) => {
  const taskCreated = await taskService.create({ ...createTaskBody, userId });
  return taskCreated;
};

export const findAll = async () => {
  const users = await taskService.findAll();
  return users;
};
