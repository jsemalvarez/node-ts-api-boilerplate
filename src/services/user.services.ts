import { UserI } from '../interfaces';

export const register = (userCreationData: UserI.UserCreationData): UserI.User => {
  const userCreated = {
    id: '',
    ...userCreationData,
  };
  return userCreated;
};

export const findAll = (): UserI.User[] => {
  const users: UserI.User[] = [];
  return users;
};

export const findOne = (userId: string): UserI.UserCreatedData => {
  const user: UserI.UserCreatedData = {
    token: '',
    id: userId,
    name: '',
    email: '',
    emailValidated: false,
    role: [],
  };
  return user;
};

// eslint-disable-next-line
export const update = (userId: string, updateUserData: UserI.UserUpdateData): boolean => {
  return true;
};

export const remove = (userId: string): string => {
  return userId;
};

export const login = (userCredentialsData: UserI.UserCredentialsData): UserI.UserCreatedData => {
  const user: UserI.UserCreatedData = {
    token: '',
    id: '',
    name: '',
    email: userCredentialsData.email,
    emailValidated: false,
    role: [],
  };
  return user;
};

export const refreshToken = () => {
  throw new Error('Feature refreshToken.businessProcess not implemented');
};

export const forgotPassword = () => {
  throw new Error('Feature forgotPassword.businessProcess not implemented');
};

export const resetPassword = () => {
  throw new Error('Feature resetPassword.businessProcess not implemented');
};

export const sendVerifiactionEmail = () => {
  throw new Error('Feature sendVerifiactionEmail.businessProcess not implemented');
};

export const verifyEmail = () => {
  throw new Error('Feature verifyEmail.businessProcess not implemented');
};
