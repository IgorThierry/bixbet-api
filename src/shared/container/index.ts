import { container } from 'tsyringe';

import { InMemoryUsersRepository } from '@modules/users/repositories/fakes/InMemoryUsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  InMemoryUsersRepository,
);
