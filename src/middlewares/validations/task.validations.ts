import Joi from 'joi';

export const createTask = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

export const getTask = {
  params: Joi.object({
    taskId: Joi.string().required(),
  }),
};

export const updateTask = {
  body: Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
  }),
  params: Joi.object({
    taskId: Joi.string().required(),
  }),
};

export const removeTask = {
  params: Joi.object({
    taskId: Joi.string().required(),
  }),
};
