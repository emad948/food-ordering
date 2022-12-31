import { FormikErrors } from 'formik';

import { OrderFormValues } from './order-form-values';

const validation = (values: OrderFormValues): FormikErrors<OrderFormValues> => {
  const errors: FormikErrors<OrderFormValues> = {};
  if (!values.customerName) {
    errors.customerName = 'Bitte gib dein Name ein.';
  }
  if (!values.orderDescription) {
    errors.orderDescription = 'Bitte gib deine Bestellung ein.';
  }
  if (values.orderPrice && isNaN(+values.orderPrice)) {
    errors.orderPrice = 'Bitte gib eine gültige Nummer.';
  }

  return errors;
};

export default validation;
