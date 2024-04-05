import { Response, Router } from 'express';

const router = Router();

router.post('/', (_req, res: Response) => {
  res.json({ message: 'endpoint create todo' });
});

router.get('/', (_req, res: Response) => {
  res.json({ message: 'endpoint get-all todos' });
});

router.get('/todoId', (_req, res: Response) => {
  res.json({ message: 'endpoit get-todo by id' });
});

router.patch('/todoId', (_req, res: Response) => {
  res.json({ message: 'endpoit update-todo by id' });
});

router.delete('/todoId', (_req, res: Response) => {
  res.json({ message: 'endpoit delete-todo by id' });
});

export default router;
