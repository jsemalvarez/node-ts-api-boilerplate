import { Router } from 'express';
import * as todoControllers from '../controllers/todo.controllers';

const router = Router();

router.post('/', todoControllers.create);

router.get('/', todoControllers.findAll);

router.get('/:todoId', todoControllers.findOne);

router.patch('/:todoId', todoControllers.update);

router.delete('/:todoId', todoControllers.remove);

export default router;
