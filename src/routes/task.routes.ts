import { Router } from 'express';

import { taskControllers } from '../controllers';

import { validateDataMiddleware, validateRoleMiddleware, validateTokenMiddleware } from '../middlewares';
import { createTask, getTask, removeTask, updateTask } from '../middlewares/validations/task.validations';
import { UserRole } from '../interfaces/user.interface';

const router = Router();

router.post('/', [validateDataMiddleware(createTask), validateTokenMiddleware], taskControllers.create);

router.get('/', [validateTokenMiddleware, validateRoleMiddleware(UserRole.ADMIN)], taskControllers.findAll);

router.get('/find-all-by-userid', [validateTokenMiddleware], taskControllers.findAllByUserId);

router.get('/:taskId', [validateDataMiddleware(getTask), validateTokenMiddleware], taskControllers.findOne);

router.patch('/:taskId', [validateDataMiddleware(updateTask), validateTokenMiddleware], taskControllers.update);

router.delete('/:taskId', [validateDataMiddleware(removeTask), validateTokenMiddleware], taskControllers.remove);

export default router;
