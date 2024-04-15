import { Router, Response } from 'express';
import { validateDataMiddleware, validateRoleMiddleware, validateTokenMiddleware } from '../middlewares';
import { UserRole } from '../interfaces/user.interface';
import { taskController, userController } from '../controllers';
import { getUser, removeUser, updateUser } from '../middlewares/validations/user.validations';

export const router = Router();

router.get('/users/', [validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)], userController.findAll);

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
  '/:userId',
  [validateDataMiddleware(removeUser), validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)],
  userController.remove,
);

router.get('/', [validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)], taskController.findAll);

router.get('/todos/:todoId', (_req, res: Response) => {
  res.json({ message: 'endpoit get-todo by id' });
});

router.patch('/todos/:todoId', (_req, res: Response) => {
  res.json({ message: 'endpoit update-todo by id' });
});

router.delete('/todos/:todoId', (_req, res: Response) => {
  res.json({ message: 'endpoit delete-todo by id' });
});

export default router;
