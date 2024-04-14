import { ObjectUserId } from '../data/mongo/mongoose-types';

export enum TaskStatus {
  TO_DO = 'ready',
  IN_PROGRES = 'in progres',
  DONE = 'done',
  CANCELLED = 'cancelled',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  userId: ObjectUserId;
}

export interface TaskCreationData extends Pick<Task, 'title' | 'description'> {}

export interface TaskUpdateData extends Partial<Task> {}
