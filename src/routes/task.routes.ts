import { Router } from 'express';

import { taskControllers } from '../controllers';

import { validateDataMiddleware, validateRoleMiddleware, validateTokenMiddleware } from '../middlewares';
import { createTask, getTask } from '../middlewares/validations/task.validations';
import { UserRole } from '../interfaces/user.interface';

const router = Router();

router.post('/', [validateDataMiddleware(createTask), validateTokenMiddleware], taskControllers.create);

router.get('/', [validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)], taskControllers.findAll);

router.get('/:taskId', [validateDataMiddleware(getTask), validateTokenMiddleware], taskControllers.findOne);

router.patch('/:todoId', taskControllers.update);

router.delete('/:todoId', taskControllers.remove);

export default router;
