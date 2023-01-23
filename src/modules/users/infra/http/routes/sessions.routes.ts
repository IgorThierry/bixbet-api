import { Router } from 'express';

import { CreateSessionController } from '../controllers/CreateSessionController';

const sessionsRoutes = Router();

const createSessionController = new CreateSessionController();

sessionsRoutes.post('/sessions', createSessionController.handle);

export { sessionsRoutes };
