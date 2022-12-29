import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';

import Topbar from '../../components/topbar';

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Topbar />
      <Container maxWidth="lg">
        <Box sx={{ pt: 4 }} component="main">
          {props.children}
        </Box>
      </Container>
      {/*<Footer />*/}
    </Box>
  );
};

export default MainLayout;
