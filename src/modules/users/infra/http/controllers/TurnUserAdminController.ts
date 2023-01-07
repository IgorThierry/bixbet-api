import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { TurnUserAdminUseCase } from '../../../useCases/TurnUserAdminUseCase';

class TurnUserAdminController {
  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const turnUserAdminUseCase = container.resolve(TurnUserAdminUseCase);
      const user = turnUserAdminUseCase.execute({ user_id });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
