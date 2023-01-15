import { InMemoryUsersRepository } from '@modules/users/repositories/fakes/InMemoryUsersRepository';
import { CreateUserUseCase } from '@modules/users/useCases/CreateUserUseCase';

let createUserUseCase: CreateUserUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;

describe('Create User', () => {
  beforeAll(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it('Should be able to create a new user', async () => {
    const userData = {
      name: 'User fake',
      email: 'fake-email@test.com',
    };

    const userCreated = createUserUseCase.execute(userData);

    console.log(userCreated);

    expect(userCreated).toHaveProperty('id');
    expect(userCreated).toHaveProperty('created_at');
    expect(userCreated.name).toBe(userCreated.name);
    expect(userCreated.email).toBe(userCreated.email);
  });
});
