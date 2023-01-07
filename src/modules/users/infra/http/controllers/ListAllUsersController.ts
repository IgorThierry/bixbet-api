import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllUsersUseCase } from '../../../useCases/ListAllUsersUseCase';

class ListAllUsersController {
  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const listAllUsersUseCase = container.resolve(ListAllUsersUseCase);
      const all = listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(all);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
