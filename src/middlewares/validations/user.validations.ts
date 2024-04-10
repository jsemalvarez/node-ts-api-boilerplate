import Joi from 'joi';

export const createUserBody = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const updateUser = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
  params: Joi.object({
    userId: Joi.string().required(),
  }),
};
