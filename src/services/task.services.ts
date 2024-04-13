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
