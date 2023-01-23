import { User as RawUser } from '@prisma/client';

import { User } from '@modules/users/entities/User';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
    };
  }

  static toDomain(raw: RawUser): User {
    const user = new User();

    user.id = raw.id;
    user.createdAt = raw.createdAt;
    user.name = raw.name;
    user.email = raw.email;
    user.password = raw.password;

    return user;
  }
}
