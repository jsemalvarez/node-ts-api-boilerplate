import { UserI } from '../interfaces';

export const register = (newUser: UserI.UserCreationData): UserI.UserCreatedData => {
  // eslint-disable-next-line
  const { password, ...restUserData } = newUser;

  const userCreated: UserI.UserCreatedData = {
    ...restUserData,
    id: 'id',
    token: 'token',
  };
  return userCreated;
};

export const findAll = (): UserI.User[] => {
  const users: UserI.User[] = [];
  return users;
};

// eslint-disable-next-line
export const findOne = (userId: string): UserI.UserCreatedData => {
  const user: UserI.UserCreatedData = {} as UserI.UserCreatedData;

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export const update = (userId: string, updateUserData: UserI.UserUpdateData): UserI.UserUpdatedData => {
  const user = findOne(userId);

  const { password, ...restUpdateUserData } = updateUserData;

  if (password) {
    throw new Error('password must not be update in this endpoint');
  }

  const userUpdated: UserI.UserUpdatedData = {
    ...user,
    ...restUpdateUserData,
    id: userId,
  };
  return userUpdated;
};

export const remove = (userId: string) => {
  const user = findOne(userId);
  return `user ${user.id} removed successfully`;
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
