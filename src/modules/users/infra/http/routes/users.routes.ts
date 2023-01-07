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

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch('/:user_id/admin', turnUserAdminController.handle);

usersRoutes.get('/:user_id', showUserProfileController.handle);

usersRoutes.get('/', listAllUsersController.handle);

export { usersRoutes };
