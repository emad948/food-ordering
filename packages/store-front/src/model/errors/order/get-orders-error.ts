import { SerializedError } from '@reduxjs/toolkit';

import { AppError } from '../app-error';

export class GetOrdersError extends AppError {
  constructor(error: SerializedError) {
    super(error, 'Das Abrufen der Bestellungen ist fehlgeschlagen.');
  }
}
