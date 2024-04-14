import mongoose from 'mongoose';
import { TaskI } from '../../../interfaces';

export interface TaskDocument extends TaskI.Task, Document {
  id: string;
}

const taskSchema = new mongoose.Schema<TaskI.Task>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(TaskI.TaskStatus),
      default: TaskI.TaskStatus.TO_DO,
    },
  },
  {
    timestamps: true,
  },
);

export const TaskModel = mongoose.model<TaskI.Task>('Task', taskSchema);
