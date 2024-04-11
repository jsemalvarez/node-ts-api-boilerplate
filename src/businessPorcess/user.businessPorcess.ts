import { UserI } from '../interfaces';
import { userService } from '../services';
import { hashingAdapter, tokenAdapter } from '../utils';
import { customError } from '../utils/custom.error';

export const register = async (userCreationData: UserI.UserCreationData) => {
  const userSaved = await userService.findOne(userCreationData.email);
  if (userSaved) {
    throw customError('user already exist', 400);
  }

  const passwordHashed = hashingAdapter.hash(userCreationData.password);

  userCreationData.password = passwordHashed;

  const userCreated = await userService.register(userCreationData);

  const token = await tokenAdapter.generateToken({ id: userCreated._id });

  if (!token) {
    throw customError('Error while creating JWT', 500);
  }

  const user = {
    ...userCreated,
    token,
  };

  return user;
};

export const findAll = async () => {
  const users = await userService.findAll();
  return users;
};

export const findOne = async (term: string) => {
  const user = await userService.findOne(term);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export const update = async (userId: string, updateUserData: UserI.UserUpdateData) => {
  await findOne(userId);

  const { password, ...restUpdateUserData } = updateUserData;

  if (password) {
    throw new Error('password must not be update in this endpoint');
  }

  const userUpdated: UserI.UserUpdateData = {
    ...restUpdateUserData,
  };

  userService.update(userId, userUpdated);
  return userUpdated;
};

export const remove = async (userId: string) => {
  const user = await findOne(userId);
  await userService.remove(user.id);
  return user.id;
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
