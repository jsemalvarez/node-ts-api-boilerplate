import { Router } from 'express';
import userRoutes from './user.routes';
import toosRoutes from './todo.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/todos', toosRoutes);

router.get('/health', (_req, res) => res.json({ message: 'App is OK :)' }));

export default router;
