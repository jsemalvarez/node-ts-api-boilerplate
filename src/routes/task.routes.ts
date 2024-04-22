import { Router } from 'express';

import { taskController } from '../controllers';

import { validateDataMiddleware, validateRoleMiddleware, validateTokenMiddleware } from '../middlewares';
import { createTask, getTask, removeTask, updateTask } from '../middlewares/validations/task.validations';
import { UserRole } from '../interfaces/user.interface';

const router = Router();

router.post('/', [validateDataMiddleware(createTask), validateTokenMiddleware], taskController.create);

router.get('/', [validateTokenMiddleware, validateRoleMiddleware(UserRole.USER)], taskController.findAll);

router.get(
  '/:taskId',
  [validateDataMiddleware(getTask), validateTokenMiddleware, validateRoleMiddleware(UserRole.USER)],
  taskController.findOne,
);

router.patch(
  '/:taskId',
  [validateDataMiddleware(updateTask), validateTokenMiddleware, validateRoleMiddleware(UserRole.USER)],
  taskController.update,
);

router.delete(
  '/:taskId',
  [validateDataMiddleware(removeTask), validateTokenMiddleware, validateRoleMiddleware(UserRole.USER)],
  taskController.remove,
);

export default router;
