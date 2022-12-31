import { Alert, Box } from '@mui/material';
import React from 'react';

export interface AlertErrorProps {
  errorMsg?: string | null;
  mb?: number;
  mt?: number;
}

const AlertError: React.FC<AlertErrorProps> = (props) => {
  if (!props.errorMsg || props.errorMsg === '') return null;

  return (
    <Box mb={props.mb || 0} mt={props.mt || 0}>
      <Alert severity="error">{props.errorMsg}</Alert>
    </Box>
  );
};

export default AlertError;
