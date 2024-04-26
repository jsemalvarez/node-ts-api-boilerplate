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

  const token = await tokenAdapter.generateToken({ id: userCreated.id });

  if (!token) {
    throw customError('Error while creating JWT', 500);
  }

  userCreated.token = token;

  await userService.update(userCreated.id, userCreated);

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
    throw customError('User not found', 404);
  }

  return user;
};

export const update = async (userId: string, updateUserData: UserI.UserUpdateData) => {
  const user = await findOne(userId);

  const { password, email, role, ...restUpdateUserData } = updateUserData;

  if (password) {
    throw customError('password must not be update in this endpoint', 404);
  }

  if (email) {
    throw customError('email must not be update in this endpoint', 404);
  }

  if (role) {
    throw customError('role must not be update in this endpoint', 404);
  }

  const userUpdated: UserI.UserUpdateData = {
    ...user,
    ...restUpdateUserData,
  };

  await userService.update(userId, userUpdated);
  return userUpdated;
};

export const remove = async (userId: string) => {
  const user = await findOne(userId);
  await userService.remove(user.id);
  return user.id;
};

export const login = async (userCredentialsData: UserI.UserCredentialsData) => {
  const user = await userService.findOne(userCredentialsData.email);

  if (!user) {
    throw customError('user or password invalid!', 404);
  }

  const isPassword = hashingAdapter.compare(userCredentialsData.password, user.password);

  if (!isPassword) {
    throw customError('user or password invalid!!', 404);
  }

  const token = await tokenAdapter.generateToken({ id: user.id });

  if (!token) {
    throw customError('Error while creating JWT', 500);
  }

  return {
    ...user,
    token,
  };
};

export const refreshToken = async (userId: string) => {
  const token = await tokenAdapter.generateToken({ id: userId });
  return token;
};

export const forgotPassword = () => {
  throw customError('Feature forgotPassword.businessProcess not implemented', 500);
};

export const resetPassword = () => {
  throw customError('Feature resetPassword.businessProcess not implemented', 500);
};

export const sendVerifiactionEmail = () => {
  throw customError('Feature sendVerifiactionEmail.businessProcess not implemented', 500);
};

export const verifyEmail = () => {
  throw customError('Feature verifyEmail.businessProcess not implemented', 500);
};
