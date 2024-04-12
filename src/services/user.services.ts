import { isObjectIdOrHexString } from 'mongoose';
import { UserDocument, UserModel } from '../data/mongo';
import { UserI } from '../interfaces';
import { regularExps } from '../utils/regular-exp';
import { customError } from '../utils/custom.error';

export const register = async (userCreationData: UserI.UserCreationData) => {
  const { name, email, password } = userCreationData;
  const userCreated = await UserModel.create({
    name,
    email,
    password,
  });

  return formatUser(userCreated);
};

export const findAll = async () => {
  const users = await UserModel.find();
  return users.map((user) => formatUser(user));
};

export const findOne = async (term: string) => {
  let user = null;
  if (regularExps.email.test(term)) {
    user = await UserModel.findOne({ email: term });
  }

  if (isObjectIdOrHexString(term)) {
    user = await UserModel.findById(term);
  }

  if (user) {
    return formatUser(user);
  }

  return false;
};

// eslint-disable-next-line
export const update = async (userId: string, updateUserData: UserI.UserUpdateData) => {
  await UserModel.updateOne({ _id: userId }, { ...updateUserData });
  return true;
};

export const remove = async (userId: string) => {
  await UserModel.deleteOne({ _id: userId });
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
  throw customError('Feature refreshToken.businessProcess not implemented', 500);
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

export const formatUser = (user: UserDocument): UserI.User => ({
  id: user._id as string,
  name: user.name,
  email: user.email,
  emailValidated: user.emailValidated,
  password: user.password,
  role: user.role,
});
