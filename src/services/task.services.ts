import { TaskModel } from '../data/mongo';
import { TaskI } from '../interfaces';

export const create = async (taskCreationData: TaskI.TaskCreationData) => {
  const { title, description, userId } = taskCreationData;
  const taskCreated = TaskModel.create({
    title,
    description,
    userId,
  });
  return taskCreated;
};

export const findAll = async () => {
  const users = await TaskModel.find();
  return users;
};

export const findById = async (taskId: string) => {
  const users = await TaskModel.findById(taskId);
  return users;
};
