import { SerializedError } from '@reduxjs/toolkit';

import { AppError } from '../app-error';

export class CreateNewOrder extends AppError {
  constructor(error: SerializedError) {
    super(error, 'Ihre Bestellung konnte leider nicht aufgegeben werden.');
  }
}
