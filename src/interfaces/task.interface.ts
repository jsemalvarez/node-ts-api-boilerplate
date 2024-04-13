export enum TaskStatus {
  READY = 'ready',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createAt: Date;
  userId: string;
}

export interface TaskCreationData extends Omit<Task, 'id' | 'status' | 'createAt'> {}
export interface TaskRequestData extends Pick<Task, 'title' | 'description'> {}
