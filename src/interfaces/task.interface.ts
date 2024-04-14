import { ObjectUserId } from '../data/mongo/mongoose-types';

export interface ObjectUserDetails extends ObjectUserId {
  id: string;
  name: string;
}

export enum TaskStatus {
  TO_DO = 'todo',
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
  userId: ObjectUserDetails;
}

export interface TaskCreationData extends Pick<Task, 'title' | 'description'> {}

export interface TaskUpdateData extends Partial<Task> {}

export interface TaskUserDetails extends Omit<Task, 'userId'> {
  user: {
    id: string;
    name: string;
  };
}
