import { UserI } from '../interfaces';
import { userService } from '../services';
import { hashingAdapter, tokenAdapter } from '../utils';
import { customError } from '../utils/custom.error';

export const register = async (userCreationData: UserI.UserCreationData): Promise<UserI.UserCreatedData> => {
  const passwordHashed = hashingAdapter.hash(userCreationData.password);

  userCreationData.password = passwordHashed;

  const userCreated = userService.register(userCreationData);

  const token = await tokenAdapter.generateToken({ id: userCreated.id });

  if (!token) {
    throw customError('Error while creating JWT', 500);
  }

  const user = {
    ...userCreated,
    token,
  };

  return user;
};

export const findAll = (): UserI.User[] => {
  const users = userService.findAll();
  return users;
};

export const findOne = (userId: string): UserI.UserCreatedData => {
  const user = userService.findOne(userId);

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

  userService.update(userId, userUpdated);
  return userUpdated;
};

export const remove = (userId: string) => {
  const user = findOne(userId);
  const userIdRemoved = userService.remove(user.id);
  return `user ${userIdRemoved} removed successfully`;
};

export const login = (userCredentialsData: UserI.UserCredentialsData): UserI.UserCreatedData => {
  const user = userService.login(userCredentialsData);

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
