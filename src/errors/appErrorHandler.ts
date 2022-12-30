import { Request, Response, NextFunction } from 'express';

import { AppError } from './AppError';

export const appErrorHandler = (
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) => {
  if (process.env.NODE_ENV === 'development') console.log(err);

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};
