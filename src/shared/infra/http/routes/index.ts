import { Router } from 'express';

import { sessionsRoutes } from '@modules/users/infra/http/routes/sessions.routes';
import { usersRoutes } from '@modules/users/infra/http/routes/users.routes';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

router.use(usersRoutes);
router.use(sessionsRoutes);

export { router };
