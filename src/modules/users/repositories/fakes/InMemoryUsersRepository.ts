import { User } from '../../entities/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class InMemoryUsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      created_at: new Date(),
    });

    this.users.push(user);
    return user;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}

export { InMemoryUsersRepository };
