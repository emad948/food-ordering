import { SerializedError } from '@reduxjs/toolkit';

export class AppError extends Error implements SerializedError {
  public code?: string;

  constructor(error: SerializedError, public appMessage: string) {
    super();

    Object.assign(this, error);
    console.log(error);
  }
}
