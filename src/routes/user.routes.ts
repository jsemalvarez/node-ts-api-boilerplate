import { Router } from 'express';

const router = Router();

router.post('/register', (_req, res) => {
  res.json({ message: 'endpoint register' });
});

router.get('/', (_req, res) => {
  res.json({ message: 'endpoint get-users' });
});

router.get('/:userId', (_req, res) => {
  res.json({ message: 'endpoint get-user by id' });
});

router.patch('/:userId', (_req, res) => {
  res.json({ message: 'endpoint update-user by id' });
});

router.delete('/:userId', (_req, res) => {
  res.json({ message: 'endpoint delete-user by id' });
});

router.post('/login', (_req, res) => {
  res.json({ message: 'endpoint login' });
});

router.post('/refresh-tokens', (_req, res) => {
  res.json({ message: 'endpoint refresh-tokens' });
});

router.post('/forgot-tokens', (_req, res) => {
  res.json({ message: 'endpoint forgot-tokens' });
});

router.post('/reset-tokens', (_req, res) => {
  res.json({ message: 'endpoint reset-tokens' });
});

router.post('/send-verifiaction-email', (_req, res) => {
  res.json({ message: 'endpoint send-verifiaction-email' });
});

router.post('/verify-email', (_req, res) => {
  res.json({ message: 'endpoint verify-email' });
});

export default router;
