export interface User {
  id: string;
  name: string;
  email: string;
  emailValidated: boolean;
  password: string;
  token: string;
  role: UserRole[];
}

export interface UserCreationData extends Omit<User, 'id'> {}

export interface UserUpdateData extends Partial<User> {}

export interface UserCredentialsData extends Pick<User, 'email' | 'password'> {}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
