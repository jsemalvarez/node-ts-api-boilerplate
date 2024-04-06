export interface User {
  id: string;
  name: string;
  email: string;
  emailValidated: boolean;
  password: string;
  role: string[];
}

export interface UserCreationData extends Omit<User, 'id'> {}

export interface UserCreatedData extends Omit<User, 'password'> {
  token: string;
}

export interface UserUpdateData extends Partial<User> {}
export interface UserUpdatedData extends Omit<User, 'password'> {}

export interface UserCredentialsData extends Pick<User, 'email' | 'password'> {}
