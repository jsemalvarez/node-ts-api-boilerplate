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

export const update = async (userId: string, taskUpdateData: TaskI.TaskUpdateData) => {
  await TaskModel.updateOne({ _id: userId }, { ...taskUpdateData });
  return true;
};

export const remove = async (taskId: string) => {
  await TaskModel.deleteOne({ _id: taskId });
  return taskId;
};
