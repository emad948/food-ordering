import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import PageLoadingIndicator from './components/page-loading-indicator';
import theme from './config/theme';
import LandingPage from './views/landing-page';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <PageLoadingIndicator />
        <CssBaseline />
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
