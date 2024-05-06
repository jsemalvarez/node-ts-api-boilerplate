import { TaskI } from '../interfaces';
import { taskService } from '../services';
import { customError } from '../utils/custom.error';

export const create = async (userId: string, taskCreationData: TaskI.TaskCreationData) => {
  const taskCreated = await taskService.create(userId, taskCreationData);
  return taskCreated;
};

export const findAll = async (searchQuery: string, page: number, limit: number, userId?: string) => {
  const tasks = await taskService.findAll(searchQuery, page, limit, userId);
  return tasks;
};

export const findById = async (taskId: string, userId?: string) => {
  const task = await taskService.findById(taskId);

  if (!task) {
    throw customError('Task not found', 404);
  }

  if (userId && userId !== task.user.id) {
    throw customError('Accion no autorizada', 403);
  }

  return task;
};

export const update = async (taskId: string, taskUpdateData: TaskI.TaskUpdateData, userId?: string) => {
  const task = await findById(taskId, userId);

  const updateData = {
    title: task.title,
    description: task.description,
    ...taskUpdateData,
    id: taskId,
  };

  await taskService.update(taskId, updateData);
  return updateData;
};

export const remove = async (taskId: string, userId?: string) => {
  const task = await findById(taskId, userId);
  await taskService.remove(task.id);
  return task.id;
};
