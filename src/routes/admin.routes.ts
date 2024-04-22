import { Router } from 'express';
import { validateDataMiddleware, validateRoleMiddleware, validateTokenMiddleware } from '../middlewares';
import { UserRole } from '../interfaces/user.interface';
import { taskController, userController } from '../controllers';
import { getUser, removeUser, updateUser } from '../middlewares/validations/user.validations';
import { getTask, removeTask, updateTask } from '../middlewares/validations/task.validations';

export const router = Router();

router.get('/users', [validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)], userController.findAll);

router.get(
  '/users/:userId',
  [validateDataMiddleware(getUser), validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)],
  userController.findOne,
);

router.patch(
  '/users/:userId',
  [validateDataMiddleware(updateUser), validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)],
  userController.update,
);

router.delete(
  '/users/:userId',
  [validateDataMiddleware(removeUser), validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)],
  userController.remove,
);

router.get('/task', [validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)], taskController.findAll);

router.get(
  '/task/:taskId',
  [validateDataMiddleware(getTask), validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)],
  taskController.findOne,
);

router.patch(
  '/task/:taskId',
  [validateDataMiddleware(updateTask), validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)],
  taskController.update,
);

router.delete(
  '/task/:taskId',
  [validateDataMiddleware(removeTask), validateTokenMiddleware, validateRoleMiddleware(UserRole.USER)],
  taskController.remove,
);

export default router;
