import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import PageLoadingIndicator from './components/page-loading-indicator';
import theme from './config/theme';
import Routes from './routes';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <PageLoadingIndicator />
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
