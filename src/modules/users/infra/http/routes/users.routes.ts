import { Router } from 'express';

import { CreateUserController } from '../controllers/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/users', createUserController.handle);

export { usersRoutes };
