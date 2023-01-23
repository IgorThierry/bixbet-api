import { AppError } from '@shared/errors/AppError';

import { InMemoryUsersRepository } from '@modules/users/repositories/fakes/InMemoryUsersRepository';
import {
  CreateUserUseCase,
  IRequest,
} from '@modules/users/useCases/CreateUserUseCase';

let createUserUseCase: CreateUserUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;

describe('Create User', () => {
  beforeAll(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const userData = {
      name: 'User fake',
      email: 'fake-email@test.com',
      password: 'fake-password',
    } as IRequest;

    const userCreated = await createUserUseCase.execute(userData);

    expect(userCreated).toHaveProperty('id');
    expect(userCreated).toHaveProperty('created_at');
    expect(userCreated.name).toBe(userData.name);
    expect(userCreated.email).toBe(userData.email);
  });
  it('should not be able to create a new user with same email from another', async () => {
    expect(async () => {
      const sameEmail = 'fake-email@test.com';

      await createUserUseCase.execute({
        name: 'First User',
        email: sameEmail,
        password: 'fake-password',
      });

      await createUserUseCase.execute({
        name: 'Second User',
        email: sameEmail,
        password: 'fake-password',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
