import { Router } from 'express';
import userRoutes from './user.routes';
import taskRoutes from './task.routes';
import adminRoutes from './admin.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/task', taskRoutes);
router.use('/admin', adminRoutes);

router.get('/health', (_req, res) => res.json({ message: 'App is OK :)' }));

export default router;
