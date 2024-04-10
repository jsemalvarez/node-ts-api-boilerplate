import { Router, Response } from 'express';

const router = Router();

router.post('/users/register', (_req, res) => {
  res.json({ message: 'endpoint register' });
});

router.get('/users/', (_req, res) => {
  res.json({ message: 'endpoint get-users' });
});

router.get('/users/:userId', (_req, res) => {
  res.json({ message: 'endpoint get-user by id' });
});

router.patch('/users/:userId', (_req, res) => {
  res.json({ message: 'endpoint update-user by id' });
});

router.delete('/users/:userId', (_req, res) => {
  res.json({ message: 'endpoint delete-user by id' });
});

router.post('/todos/', (_req, res: Response) => {
  res.json({ message: 'endpoint create todo' });
});

router.get('/todos/', (_req, res: Response) => {
  res.json({ message: 'endpoint get-all todos' });
});

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
