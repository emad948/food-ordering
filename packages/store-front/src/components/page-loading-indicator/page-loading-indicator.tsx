import { LinearProgress } from '@mui/material';
import React from 'react';

import { useAppSelector } from '../../hooks';

const root = {
  position: 'fixed',
  zIndex: 2000,
  top: 0,
  left: 0,
  right: 0,
};

const PageLoadingIndicator: React.FC = () => {
  const stateLoading = useAppSelector((state) => state.order.loading);

  if (!stateLoading) {
    return null;
  }

  return <LinearProgress sx={root} variant="query" color="secondary" />;
};

export default PageLoadingIndicator;
