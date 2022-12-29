import { TypographyOptions } from '@mui/material/styles/createTypography';

import palette from './palette';

const defaultColor = '#000';

const typography: TypographyOptions = {
  h1: {
    color: palette.text?.primary ?? defaultColor,
    fontWeight: 700,
    fontSize: '35px',
    letterSpacing: '-0.24px',
    lineHeight: '40px',
  },
  h2: {
    color: palette.text?.primary ?? defaultColor,
    fontWeight: 700,
    fontSize: '29px',
    letterSpacing: '-0.24px',
    lineHeight: '32px',
  },
  h3: {
    color: palette.text?.primary ?? defaultColor,
    fontWeight: 700,
    fontSize: '22px',
    letterSpacing: '-0.06px',
    lineHeight: '26px',
  },
  h4: {
    color: palette.text?.primary ?? defaultColor,
    fontWeight: 700,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px',
  },
  h5: {
    color: palette.text?.primary ?? defaultColor,
    fontWeight: 700,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  h6: {
    color: palette.text?.primary ?? defaultColor,
    fontWeight: 700,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
  },
  subtitle1: {
    color: palette.text?.primary ?? defaultColor,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '25px',
  },
  subtitle2: {
    color: palette.text?.secondary ?? defaultColor,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '21px',
  },
  body1: {
    color: palette.text?.primary,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '23px',
  },
  body2: {
    color: palette.text?.secondary ?? defaultColor,
    fontSize: '12px',
    letterSpacing: '-0.04px',
    lineHeight: '18px',
  },
  button: {
    color: palette.text?.primary,
    fontSize: '14px',
    textTransform: 'none',
  },
  caption: {
    color: palette.text?.secondary ?? defaultColor,
    fontSize: '11px',
    letterSpacing: '0.33px',
    lineHeight: '13px',
  },
  overline: {
    color: palette.text?.secondary ?? defaultColor,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase',
  },
};

export default typography;
