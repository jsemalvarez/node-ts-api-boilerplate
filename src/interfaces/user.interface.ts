export interface User {
  id: string;
  name: string;
  email: string;
  emailValidated: boolean;
  password: string;
  role: UserRole[];
}

export interface UserCreationData extends Omit<User, 'id'> {}

export interface UserCreatedData extends Omit<User, 'password'> {
  token: string;
}

export interface UserUpdateData extends Partial<User> {}
export interface UserUpdatedData extends Omit<User, 'id' | 'password'> {}

export interface UserCredentialsData extends Pick<User, 'email' | 'password'> {}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}
