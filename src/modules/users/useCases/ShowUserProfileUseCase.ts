import { injectable, inject } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import { User } from '../entities/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowUserProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
