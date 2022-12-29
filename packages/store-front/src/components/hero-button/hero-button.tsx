import { Button, SxProps } from '@mui/material';
import React, { ReactElement } from 'react';

export interface HeroButtonProps {
  onClick?: () => void;
  label: string | ReactElement;
  fullWidth?: boolean;
  size?: 'small' | 'large' | 'medium';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  sx?: SxProps;
}

const HeroButton: React.FC<HeroButtonProps> = ({ label, type, disabled, onClick, fullWidth, size, sx }) => (
  <Button
    size={size ?? 'large'}
    variant="contained"
    disabled={disabled}
    color="primary"
    onClick={onClick}
    type={type}
    fullWidth={fullWidth}
    sx={{
      '&:hover': {
        backgroundColor: 'secondary.main',
        color: 'primary.main',
        pointer: 'cursor',
      },
      ...sx,
    }}
  >
    {label}
  </Button>
);

export default HeroButton;
