import { Router } from 'express';
import userRoutes from './user.routes';
import todosRoutes from './todo.routes';
import adminRoutes from './admin.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/todos', todosRoutes);
router.use('/admin', adminRoutes);

router.get('/health', (_req, res) => res.json({ message: 'App is OK :)' }));

export default router;
