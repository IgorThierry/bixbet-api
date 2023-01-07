import { Router } from 'express';

import { usersRoutes } from '../modules/users/infra/http/routes/users.routes';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

router.use('/users', usersRoutes);

export { router };
