import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from '../../../useCases/CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { email, name, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    const user = await createUserUseCase.execute({ email, name, password });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
