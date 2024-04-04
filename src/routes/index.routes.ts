import { Router } from 'express';
import userRoutes from './user.routes';

const router = Router();

router.use('/users', userRoutes);

router.get('/health', (_req, res) => res.json({ message: 'App is OK :)' }));

export default router;
