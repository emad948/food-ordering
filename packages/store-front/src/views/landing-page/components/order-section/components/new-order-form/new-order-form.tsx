import { Box, Button, Checkbox, FormControlLabel, SxProps, Typography } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { TextField } from 'formik-mui';
import React from 'react';

import { useOrderActions } from '../../../../../../hooks';
import { OrderFormValues } from './order-form-values';

const inputClass: SxProps = {
  mb: 1,
};

const initialValues: OrderFormValues = {
  orderDescription: '',
  customerName: '',
  assistant: false,
};

const NewOrderForm: React.FC = () => {
  const { createOrder } = useOrderActions();

  const submitHandler = async (values: OrderFormValues, formikHelpers: FormikHelpers<OrderFormValues>) => {
    const successHandler = () => {
      formikHelpers.setSubmitting(false);
      formikHelpers.resetForm();
    };

    const errorHandler = () => {
      formikHelpers.setSubmitting(false);
    };

    await createOrder(values, successHandler, errorHandler);
  };

  return (
    <>
      <Box>
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
          {(formikProps) => (
            <Form>
              <Typography mb={3} variant={'h2'}>
                Bestellen Sie hier Ihr Essen
              </Typography>

              <Field
                component={TextField}
                sx={inputClass}
                name="customerName"
                label={'Name'}
                fullWidth
                variant="standard"
                required
              />

              <Field
                component={TextField}
                name="orderDescription"
                placeholder="Bitte gib deine Bestellung auf, du kannst alles von einem Hamburger bis hin zu einem Apfel bestellen 😋"
                label={'Bestellbeschreibung'}
                fullWidth
                required
                sx={inputClass}
                variant="standard"
                multiline={true}
                rows={4}
              />

              <Field
                sx={{ maxWidth: '250px', mb: 1 }}
                component={TextField}
                name="orderPrice"
                label={'Preis'}
                fullWidth
                variant="standard"
              />

              <Box mb={2}>
                <FormControlLabel
                  sx={{ mb: -2 }}
                  control={
                    <Checkbox
                      checked={formikProps.values.assistant}
                      onChange={(e) => {
                        formikProps.setFieldValue('assistant', e.target.checked);
                      }}
                    />
                  }
                  label="Käufer beim Kauf assistieren"
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={formikProps.isSubmitting || !formikProps.isValid}
                sx={{ width: { xs: '100%', md: 'inherit' }, mt: 1 }}
              >
                Bestellen und später bezahlen
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default NewOrderForm;
