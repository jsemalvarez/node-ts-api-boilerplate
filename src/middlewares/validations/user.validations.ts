import Joi from 'joi';

export const createUser = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};

export const getUser = {
  params: Joi.object({
    userId: Joi.string().required(),
  }),
};

export const updateUser = {
  body: Joi.object({
    name: Joi.string().required(),
  }),
  params: Joi.object({
    userId: Joi.string().required(),
  }),
};

export const updateUserBySelf = {
  body: Joi.object({
    name: Joi.string().required(),
  }),
};

export const loginUser = {
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const removeUser = {
  params: Joi.object({
    userId: Joi.string().required(),
  }),
};
