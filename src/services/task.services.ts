import { TaskDocument, TaskModel } from '../data/mongo';
import { TaskI } from '../interfaces';

interface OptionsFilter {
  $or: { [key: string]: { $regex: RegExp } }[];
  userId?: string;
}

export const create = async (userId: string, taskCreationData: TaskI.TaskCreationData) => {
  const { title, description } = taskCreationData;
  const taskCreated = TaskModel.create({
    title,
    description,
    userId,
  });
  return taskCreated;
};

export const findAll = async (searchQuery: string, userId?: string) => {
  const regex = new RegExp(searchQuery, 'i');

  const optionsFilter: OptionsFilter = {
    $or: [{ title: { $regex: regex } }, { description: { $regex: regex } }],
  };

  if (userId) {
    optionsFilter.userId = userId;
  }

  const tasks = await TaskModel.find(optionsFilter).populate('userId');
  const formattedTasks: TaskI.TaskUserDetails[] = tasks.map((task) => formatTask(task));
  return formattedTasks;
};

export const findById = async (taskId: string) => {
  const task = await TaskModel.findById(taskId).populate('userId');
  if (task) {
    return formatTask(task);
  }
  return null;
};

export const update = async (userId: string, taskUpdateData: TaskI.TaskUpdateData) => {
  await TaskModel.updateOne({ _id: userId }, { ...taskUpdateData });
  return true;
};

export const remove = async (taskId: string) => {
  await TaskModel.deleteOne({ _id: taskId });
  return taskId;
};

export const formatTask = (task: TaskDocument): TaskI.TaskUserDetails => ({
  id: task.id,
  title: task.title,
  description: task.description,
  status: task.status,
  createdAt: task.createdAt,
  user: {
    id: task.userId.id,
    name: task.userId.name,
  },
});
