import { Box, Button, Checkbox, FormControlLabel, SxProps, Typography } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { TextField } from 'formik-mui';
import React, { useState } from 'react';

import AlertError from '../../../../../../components/alert-error';
import HeroButton from '../../../../../../components/hero-button';
import { useAppSelector, useOrderActions } from '../../../../../../hooks';
import validation from './form-validation';
import { OrderFormValues } from './order-form-values';

const inputClass: SxProps = {
  mb: 1,
};

const initialValues: OrderFormValues = {
  orderDescription: '',
  customerName: '',
  orderPrice: '',
  assistant: false,
};

const NewOrderForm: React.FC = () => {
  const { createOrder } = useOrderActions();
  const { errorMsg } = useAppSelector((root) => root.order);
  const [orderedSuccessfully, setOrderedSuccessfully] = useState(false);

  const submitHandler = async (values: OrderFormValues, formikHelpers: FormikHelpers<OrderFormValues>) => {
    const successHandler = () => {
      formikHelpers.setSubmitting(false);
      formikHelpers.resetForm();
      setOrderedSuccessfully(true);
    };

    const errorHandler = () => {
      formikHelpers.setSubmitting(false);
    };

    await createOrder({ ...values, orderPrice: +values.orderPrice }, successHandler, errorHandler);
  };

  if (orderedSuccessfully) {
    return (
      <>
        <Typography variant={'h2'} component={'p'} mb={2}>
          Vielen Dank,
        </Typography>
        <Typography mb={2}>
          Wir haben deine Bestellung erhalten. Wir werden jetzt mit der Vorbereitung Ihres Essens beginnen.
        </Typography>
        <HeroButton
          size={'medium'}
          onClick={() => {
            setOrderedSuccessfully(false);
          }}
          label="Zurück"
        />
      </>
    );
  }

  return (
    <>
      <AlertError errorMsg={errorMsg} mb={2} />
      <Box>
        <Formik initialValues={initialValues} onSubmit={submitHandler} validate={validation} validateOnMount={true}>
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
