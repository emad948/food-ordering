import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import theme from './config/theme';
import LandingPage from './views/landing-page';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
