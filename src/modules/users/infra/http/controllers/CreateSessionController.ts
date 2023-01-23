import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from '@modules/users/useCases/AuthenticateUserUseCase';

import { UserViewModel } from '../mappers/UserViewModel';

class CreateSessionController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticateUser = container.resolve(AuthenticateUserUseCase);

    const { user, token } = await authenticateUser.execute({ email, password });

    return response.json({ user: UserViewModel.toHTTP(user), token });
  }
}

export { CreateSessionController };
