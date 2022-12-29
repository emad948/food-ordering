import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

import Footer from '../../components/footer';
import Topbar from '../../components/topbar';

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Topbar />

      <Box sx={{ pt: 4 }} component="main">
        {props.children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
