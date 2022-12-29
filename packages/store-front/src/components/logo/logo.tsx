import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';

export interface LogoProps {
  sx?: SxProps<Theme>;
  red?: boolean;
}

const Logo: React.FC<LogoProps> = (props) => {
  if (props.red) {
    return <Box component={'img'} sx={props.sx} src="/logo-red.svg" alt={'logo'} />;
  }
  return <Box component={'img'} sx={props.sx} src="/logo.svg" alt={'logo'} />;
};

export default Logo;
