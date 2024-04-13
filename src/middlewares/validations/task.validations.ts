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
