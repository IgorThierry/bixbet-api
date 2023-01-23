import { AppError } from '@shared/errors/AppError';

import { FakeHashProvider } from '../providers/HashProvider/fakes/FakeHashProvider';
import { InMemoryUsersRepository } from '../repositories/fakes/InMemoryUsersRepository';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let fakeUsersRepository: InMemoryUsersRepository;
let fakeHashProvider: FakeHashProvider;

let authenticateUser: AuthenticateUserUseCase;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new InMemoryUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    authenticateUser = new AuthenticateUserUseCase(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUsersRepository.create({
      email: 'john@gmail.com',
      name: 'john',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'john@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'john@gmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await fakeUsersRepository.create({
      email: 'john@gmail.com',
      name: 'john',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'john@gmail.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
