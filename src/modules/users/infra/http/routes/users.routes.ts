import { Router } from 'express';

import { CreateUserController } from '../controllers/CreateUserController';
import { ListAllUsersController } from '../controllers/ListAllUsersController';
import { ShowUserProfileController } from '../controllers/ShowUserProfileController';
import { TurnUserAdminController } from '../controllers/TurnUserAdminController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const turnUserAdminController = new TurnUserAdminController();
const showUserProfileController = new ShowUserProfileController();
const listAllUsersController = new ListAllUsersController();

usersRoutes.post('/users', createUserController.handle);

usersRoutes.patch('/users/:user_id/admin', turnUserAdminController.handle);

usersRoutes.get('/users/:user_id', showUserProfileController.handle);

usersRoutes.get('/users', listAllUsersController.handle);

export { usersRoutes };
