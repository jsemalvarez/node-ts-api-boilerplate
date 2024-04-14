import mongoose from 'mongoose';
import { TaskI } from '../../../interfaces';

const taskSchema = new mongoose.Schema(
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
    role: {
      type: [String],
      enum: Object.values(TaskI.TaskStatus),
      default: [TaskI.TaskStatus.TO_DO],
    },
  },
  {
    timestamps: true,
  },
);

export const TaskModel = mongoose.model('Task', taskSchema);
