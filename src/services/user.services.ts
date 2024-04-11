import { isObjectIdOrHexString } from 'mongoose';
import { UserModel } from '../data/mongo';
import { UserI } from '../interfaces';
import { regularExps } from '../utils/regular-exp';

export const register = async (userCreationData: UserI.UserCreationData) => {
  const { name, email, password } = userCreationData;
  const userCreated = await UserModel.create({
    name,
    email,
    password,
  });

  // await userCreated.save();

  return userCreated.toObject();
};

export const findAll = async () => {
  const users = await UserModel.find();
  return users;
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
    return {
      id: user._id + '',
      name: user.name,
      email: user.email,
      emailValidated: user.emailValidated,
      password: user.password,
      role: user.role as UserI.UserRole[],
    };
  }

  return false;
};

// eslint-disable-next-line
export const update = (userId: string, updateUserData: UserI.UserUpdateData): boolean => {
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
