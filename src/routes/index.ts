import { Router } from 'express';

import { usersRoutes } from './users.routes';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

router.use('/users', usersRoutes);

export { router };
