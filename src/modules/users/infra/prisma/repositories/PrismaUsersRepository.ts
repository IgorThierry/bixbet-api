import { prisma } from '@shared/infra/prisma/prismaClient';

import { User } from '@modules/users/entities/User';
import {
  ICreateUserDTO,
  IUsersRepository,
} from '@modules/users/repositories/IUsersRepository';

import { PrismaUserMapper } from '../mappers/PrismaUserMapper';

class PrismaUsersRepository implements IUsersRepository {
  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
    });

    const raw = PrismaUserMapper.toPrisma(user);

    await prisma.user.create({
      data: raw,
    });

    return user;
  }

  async findById(userId: string): Promise<User> {
    const userRaw = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userRaw) {
      return null;
    }

    const user = PrismaUserMapper.toDomain(userRaw);
    return user;
  }

  async findByEmail(userEmail: string): Promise<User> {
    const userRaw = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!userRaw) {
      return null;
    }

    const user = PrismaUserMapper.toDomain(userRaw);
    return user;
  }
}

export { PrismaUsersRepository };
