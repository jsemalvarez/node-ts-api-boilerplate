import { TaskI } from '../interfaces';
import { taskService } from '../services';
import { customError } from '../utils/custom.error';

export const create = async (userId: string, createTaskBody: TaskI.TaskRequestData) => {
  const taskCreated = await taskService.create({ ...createTaskBody, userId });
  return taskCreated;
};

export const findAll = async () => {
  const users = await taskService.findAll();
  return users;
};

export const findById = async (taskId: string) => {
  const task = await taskService.findById(taskId);

  if (!task) {
    throw customError('Task not found', 404);
  }

  return task;
};

export const remove = async (taskId: string) => {
  const task = await findById(taskId);
  await taskService.remove(task.id);
  return task.id;
};
