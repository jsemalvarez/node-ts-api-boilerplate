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
  createAt: Date;
  userId: string;
}

export interface TaskCreationData extends Pick<Task, 'title' | 'description'> {}

export interface TaskUpdateData extends Partial<Task> {}
