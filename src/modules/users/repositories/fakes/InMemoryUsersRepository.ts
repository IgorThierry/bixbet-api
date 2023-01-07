import { User } from '../../entities/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class InMemoryUsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = this.users.find((user) => user.id === receivedUser.id);
    user.admin = true;
    user.updated_at = new Date();
    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { InMemoryUsersRepository };
