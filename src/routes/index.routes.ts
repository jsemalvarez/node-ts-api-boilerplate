import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => res.json({ message: 'App is OK :)' }));

export default router;
