import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const showUserProfileUseCase = container.resolve(ShowUserProfileUseCase);
      const user = showUserProfileUseCase.execute({ user_id });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
