import { taskService } from '../services';

export interface TaskData {
  title: string;
  description: string;
}

export const create = async (userId: string, createTaskBody: TaskData) => {
  const taskCreated = await taskService.create({ ...createTaskBody, userId });
  return taskCreated;
};
